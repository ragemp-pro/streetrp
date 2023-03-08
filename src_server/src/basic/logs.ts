import { isObject } from 'lodash';
import { AdminLog, MoneyLog, FactionLog } from 'models/Logs';
import redis from 'utils/redis';

type LogsGroup = 'money' | 'admin' | 'faction';

class Logs {
	create(type: LogsGroup, data: { [name: string]: any }) {
		if (!isObject(data)) throw new Error('bad data');

		redis.client.rpush(
			`logs_${type}`,
			JSON.stringify({ ...data, createdAt: new Date().toISOString() })
		);
	}

	async saveAll() {
		const adminLogs = await this.getLogs('logs_admin');
		const moneyLogs = await this.getLogs('logs_money');
		const factionLogs = await this.getLogs('logs_faction');

		if (adminLogs.length) await AdminLog.insertMany(adminLogs);
		if (moneyLogs.length) await MoneyLog.insertMany(moneyLogs);
		if (factionLogs.length) await FactionLog.insertMany(factionLogs);

		redis.client
			.pipeline()
			.ltrim('logs_money', moneyLogs.length, -1)
			.ltrim('logs_admin', adminLogs.length, -1)
			.ltrim('logs_faction', factionLogs.length, -1)
			.exec();
	}

	private async getLogs(name: string) {
		const data = (await redis.client.lrange(name, 0, -1)).map((item) => JSON.parse(item));

		return data;
	}
}

export default new Logs();
