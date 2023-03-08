import IORedis from 'ioredis';
import logger from './logger';

class RedisController {
	public client: IORedis.Redis;

	init() {
		this.client = new IORedis({
			host: process.env.REDIS_HOST,
			port: +process.env.REDIS_PORT || 6379,
			password: process.env.REDIS_PASSWORD
		});

		this.client.on('connect', () => {
			logger.success('Redis storage is ready.');
		});
	}
}

export default new RedisController();
