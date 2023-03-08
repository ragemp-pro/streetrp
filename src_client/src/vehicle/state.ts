type State = {
	engine: boolean;
	locked: boolean;
	dirt: number;
	health: {
		body: number;
		engine: number;
	};
	roof: number;
	doors: number[];
	wheels: number[];
	windows: number[];
	radioIndex: number;
	trunk: boolean;
	indicators: {
		left: boolean;
		right: boolean;
	};
};

class VehicleState {
	get(vehicle: VehicleMp) {
		return vehicle?.getVariable('state') as State;
	}

	setEngineState(vehicle: VehicleMp, status: boolean, instantly: boolean) {
		if (vehicle) vehicle.setEngineOn(status, instantly, true);
	}

	setDirtLevel(vehicle: VehicleMp, value: number) {
		if (vehicle) vehicle.setDirtLevel(value);
	}

	setLockStatus(vehicle: VehicleMp, status: boolean) {
		if (!vehicle) return;

		vehicle.setDoorsLocked(status ? 2 : 1);

		mp.game.audio.playSoundFromEntity(
			1,
			status ? 'Remote_Control_Close' : 'Remote_Control_Open',
			vehicle.handle,
			'PI_Menu_Sounds',
			true,
			0
		);
	}

	setDoorsState(vehicle: VehicleMp, doors: number[]) {
		if (!vehicle) return;

		for (let door = 0; door <= 7; door++) {
			if (doors[door]) vehicle.setDoorOpen(door, false, false);
			else vehicle.setDoorShut(door, false);
		}
	}

	setWheelsState(vehicle: VehicleMp, wheels: number[]) {
		if (!vehicle) return;

		vehicle.setTyresCanBurst(true);

		wheels.forEach((status, index) => {
			if (status === 1) vehicle.setTyreBurst(index, false, 1000);
			else if (status === 0) vehicle.setTyreFixed(index);
			else vehicle.setTyreBurst(index, true, 1000);
		});
	}

	setWindowsState(vehicle: VehicleMp, windows: number[]) {
		if (!vehicle) return;

		windows.forEach((status, index) => {
			if (status === 1) vehicle.rollDownWindow(index);
			else vehicle.rollUpWindow(index);
		});
	}

	setHealth(vehicle: VehicleMp, body: number, engine: number) {
		if (!vehicle) return;

		vehicle.setBodyHealth(body);
		vehicle.setEngineHealth(engine);
	}

	setRoofState(vehicle: VehicleMp, state: number) {
		if (!vehicle) return;

		if (state === 0) vehicle.lowerConvertibleRoof(false);
		else if (state === 2) vehicle.raiseConvertibleRoof(false);
	}

	setTurnSignalsStatus(vehicle: VehicleMp, left: boolean, right: boolean) {
		if (!vehicle) return;

		vehicle.setIndicatorLights(1, left);
		vehicle.setIndicatorLights(0, right);
	}
}

export default new VehicleState();
