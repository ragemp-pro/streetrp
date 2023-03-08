const localPlayer = mp.players.local;

const maxSpeed = 10.0;
const minHeight = 15.0;
const maxHeight = 45.0;
const maxAngle = 15.0;

function rappel() {
	const { vehicle } = localPlayer;

	if (!mp.game.invoke('0x4E417C547182C84D', vehicle.handle)) {
		return mp.console.logInfo('wrong vehicle');
	}

	if (vehicle.getSpeed() > maxSpeed) {
		return mp.console.logInfo('high speed');
	}

	if (
		vehicle.getPedInSeat(-1) === localPlayer.handle ||
		vehicle.getPedInSeat(0) === localPlayer.handle
	) {
		return mp.console.logInfo('You cannot rappel from your seat.');
	}

	const taskStatus = localPlayer.getScriptTaskStatus(-275944640);
	if (taskStatus === 0 || taskStatus === 1) {
		return mp.console.logInfo('You are already rappelling.');
	}

	const curHeight = vehicle.getHeightAboveGround();

	if (curHeight < minHeight || curHeight > maxHeight) {
		return mp.console.logInfo('The vehicle is too low/too high for rappelling.');
	}

	if (!vehicle.isUpright(maxAngle) || vehicle.isUpsidedown()) {
		return mp.console.logInfo('The vehicle needs to be stable for rappelling.');
	}

	localPlayer.clearTasks();
	localPlayer.taskRappelFromHeli(10.0);
}

mp.keys.bind(80, true, () => {
	if (mp.gui.cursor.visible) return;

	rappel();
});

export {};
