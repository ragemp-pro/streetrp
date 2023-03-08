import logger from 'utils/logger';
import report from 'admin/report';

class AntiCheat {
	private active = false;

	init() {
		mp.events.subscribe({
			'AntiCheat-SendReport': this.createReport.bind(this)
		});
		this.active = true;

		logger.success('Anti-Cheat enabled.');
	}

	sleep(player: Player, duration?: number) {
		player.callEvent('AntiCheat-Pause', duration);
	}

	private createReport(target: Player, reason: string) {
		if (!this.active) return;

		report.notifyAdmins(`${target.getName()} [${target.mp.id}]: ${reason}`);
	}
}

export default new AntiCheat();
