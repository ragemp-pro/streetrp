import rpc from 'rage-rpc';

class HUD {
	showDate(player: PlayerMp, date: string) {
		HUD.callPlayerBrowser(player, 'App-SetDate', date);
	}

	updateMoney(player: PlayerMp, data: PlayerMoney) {
		HUD.callPlayerBrowser(player, 'Player-SetMoney', data);
	}

	showSatiety(player: PlayerMp, amount: number) {
		HUD.callPlayerBrowser(player, 'Player-SetSatiety', amount);
	}

	showTasks(player: PlayerMp, tasks: string[]) {
		HUD.callPlayerBrowser(player, 'Player-SetTasks', [tasks]);
	}

	showBonusTime(player: PlayerMp, time: number) {
		HUD.callPlayerBrowser(player, 'Player-SetBonus', time);
	}

	showNotification(
		player: Player,
		type: 'success' | 'info' | 'warn' | 'error',
		text: string,
		inMenu = false
	) {
		player.callEvent('Notifications-Show', [type, text, inMenu]);
	}

	showInteract(player: Player, keyName?: string) {
		player.callEvent('HUD-ShowInteract', keyName);
	}

	showLevel(player: Player, level: number, experience: [number, number]) {
		player.callEvent('HUD-ShowLevel', [level, experience]);
	}

	private static callPlayerBrowser(player: PlayerMp, event: string, data: any) {
		rpc.callBrowsers(player, event, data, { noRet: true });
	}
}

export default new HUD();
