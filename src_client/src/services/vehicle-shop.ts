const player = mp.players.local;

type ShopCoords = {
	spawn: {
		position: Vector3Mp;
		heading: number;
	};
	camera: {
		position: Vector3Mp;
		point: Vector3Mp;
	};
	testPosition?: Vector3Mp;
};

const coords: { [name: string]: ShopCoords } = {
	cheap_carshop: {
		spawn: {
			position: new mp.Vector3(230.192, -987.231, -99.269),
			heading: 126
		},
		camera: {
			position: new mp.Vector3(227.618, -995.109, -98.224),
			point: new mp.Vector3(234.116, -974.963, -97.539)
		},
		testPosition: new mp.Vector3(-49.913, -1650.858, 28.878)
	},
	mid_carshop: {
		spawn: {
			position: new mp.Vector3(230.192, -987.231, -99.269),
			heading: 126
		},
		camera: {
			position: new mp.Vector3(227.618, -995.109, -98.224),
			point: new mp.Vector3(234.116, -974.963, -97.539)
		},
		testPosition: new mp.Vector3(-179.077, -1144.046, 22.692)
	},
	premium_carshop: {
		spawn: {
			position: new mp.Vector3(-44.651, -1097.625, 26),
			heading: 115
		},
		camera: {
			position: new mp.Vector3(-45.528, -1104.588, 26.826),
			point: new mp.Vector3(-43.646, -1091.035, 26.614)
		},
		testPosition: new mp.Vector3(-75.287, -1081.398, 26.469)
	},
	vip_shop: {
		spawn: {
			position: new mp.Vector3(230.192, -987.231, -99.269),
			heading: 126
		},
		camera: {
			position: new mp.Vector3(227.618, -995.109, -98.224),
			point: new mp.Vector3(234.116, -974.963, -97.539)
		},
		testPosition: new mp.Vector3(-813.933, -229.134, 36.849)
	},
	bikeshop: {
		spawn: {
			position: new mp.Vector3(971.023, -121.688, 73.824),
			heading: -24.028
		},
		camera: {
			position: new mp.Vector3(966.944, -116.108, 74.527),
			point: new mp.Vector3(980.207, -133.763, 76.456)
		}
	},
	boatshop: {
		spawn: {
			position: new mp.Vector3(-813.275, -1507.794, -0.5),
			heading: 23.169
		},
		camera: {
			position: new mp.Vector3(-826.449, -1506.624, 1.916),
			point: new mp.Vector3(-760.355, -1515.922, 5.939)
		}
	},
	airshop: {
		spawn: {
			position: new mp.Vector3(-1507.744, -2701.061, 14.547),
			heading: 355.963
		},
		camera: {
			position: new mp.Vector3(-1517.589, -2688.863, 15.358),
			point: new mp.Vector3(-1508.34, -2701.298, 13.694)
		}
	}
};

class VehicleShop {
	private type = '';

	private prices: { [name: string]: number } = {};

	private testDrive = false;

	private vehicle?: VehicleMp;

	private playerPosition?: Vector3Mp;

	constructor() {
		mp.events.subscribe({
			'VehicleShop-ShowMenu': this.showMenu.bind(this),
			'VehicleShop-SetVehicle': this.spawnVehicle.bind(this),
			'VehicleShop-ChangeColor': this.changeColor.bind(this),
			'VehicleShop-TestDrive': this.startTestDrive.bind(this)
		});

		mp.events.subscribeToDefault({
			playerLeaveVehicle: this.stopTestDrive.bind(this)
		});
	}

	private showMenu(type: string, prices: { [name: string]: number }) {
		const {
			camera,
			spawn: { position }
		} = coords[type];

		mp.cameras.set(camera.position, new mp.Vector3(0, 0, 0), camera.point, 50);

		this.playerPosition = player.position;
		player.setHelmet(false);
		player.setAlpha(0);
		player.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);

		mp.browsers.showPage('vehicle_shop', { type, prices });
		mp.browsers.setHideBind(() => this.closeMenu());

		this.type = type;
		this.prices = prices;
	}

	closeMenu() {
    if (this.vehicle) {
      this.vehicle.destroy();
      this.vehicle = null;
    }

		if (!this.testDrive) {
			this.resetPlayer();
			this.type = '';
			this.prices = {};
			this.playerPosition = null;

			mp.events.callServer('VehicleShop-Exit', null, false);
		}

		mp.cameras.reset();
		mp.browsers.hidePage();
	}

	private async startTestDrive(model: string) {
		if (this.testDrive || !mp.vehicles.exists(this.vehicle)) return;

    const position = coords[this.type]?.testPosition || player.position;
		const color = this.vehicle.getCustomPrimaryColour(1, 1, 1);
    player.setCoordsNoOffset(position.x, position.y, position.z, false, false, false);
		await mp.events.callServer('VehicleShop-StartTestDrive', [
      position,
			model,
			[...Object.values(color), 0]
		]);

		this.testDrive = true;
		this.closeMenu();
		player.setAlpha(255);
	}

	private async stopTestDrive() {
		if (!this.testDrive) return;

		await mp.events.callServer('VehicleShop-StopTestDrive');
		this.testDrive = false;

		this.resetPlayer();
		this.showMenu(this.type, this.prices);
	}

	private async spawnVehicle(name: string) {
		if (this.vehicle) this.vehicle.destroy();
		player.setAlpha(0);

		const {
			spawn: { position, heading }
		} = coords[this.type];

		this.vehicle = mp.vehicles.new(mp.game.joaat(name), position, {
			heading,
			dimension: player.dimension,
			numberPlate: 'STREETRP'
		});
		while (!mp.game.entity.isAnEntity(this.vehicle.handle)) await mp.game.waitAsync(0);

		this.vehicle.setHeading(heading);
		this.vehicle.setDirtLevel(0);

		player.taskEnterVehicle(this.vehicle.handle, 2000, -1, 2, 16, 0);
		this.vehicle.freezePosition(true);

		mp.game.audio.setFrontendRadioActive(false);
	}

	private changeColor(color: RGB) {
		if (!this.vehicle) return;

		this.vehicle.setCustomPrimaryColour(...color);
		this.vehicle.setCustomSecondaryColour(...color);
	}

	private resetPlayer() {
		player.setCoordsNoOffset(
			this.playerPosition.x,
			this.playerPosition.y,
			this.playerPosition.z,
			false,
			false,
			false
		);
		player.setAlpha(255);
		player.setHelmet(true);
	}
}

const service = new VehicleShop();

export {};
