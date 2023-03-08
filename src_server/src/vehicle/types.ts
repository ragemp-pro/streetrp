export type VehicleType = {
	tank: number;
	health: number;
	trunk: InventoryCapacity;
	fuel: string;
};

export const vehicleTypes: { [name: string]: VehicleType } = {
  coupe_small: {
    tank: 30,
    health: 1000,
    trunk: {
      cells: 4,
      slots: 4
    },
    fuel: 'low'
  },
	coupe: {
		tank: 35,
		health: 1000,
		trunk: {
			cells: 6,
			slots: 8
		},
		fuel: 'low'
	},
	sedan: {
		tank: 50,
		health: 1000,
		trunk: {
			cells: 18,
			slots: 22
		},
		fuel: 'low'
	},
	sport: {
		tank: 45,
		health: 1000,
		trunk: {
			cells: 12,
			slots: 15
		},
		fuel: 'mid'
	},
	muscle: {
		tank: 50,
		health: 1000,
		trunk: {
			cells: 15,
			slots: 18
		},
		fuel: 'low'
	},
	SUV: {
		tank: 60,
		health: 1000,
		trunk: {
			cells: 21,
			slots: 24
		},
		fuel: 'low'
	},
	microbus: {
		tank: 60,
		health: 1000,
		trunk: {
			cells: 24,
			slots: 30
		},
		fuel: 'diesel'
	},
	cargo: {
		tank: 120,
		health: 1000,
		trunk: {
			cells: 30,
			slots: 35
		},
		fuel: 'diesel'
	},
	bicycle: {
		tank: 0,
		health: 1000,
		trunk: {
			cells: 0,
			slots: 0
		},
		fuel: 'mechanical'
	},
	motorcycle: {
		tank: 30,
		health: 1000,
		trunk: {
			cells: 2,
			slots: 2
		},
		fuel: 'low'
	},
	helicopter: {
		tank: 80,
		health: 1000,
		trunk: {
			cells: 24,
			slots: 20
		},
		fuel: 'diesel'
	},
	plane: {
		tank: 120,
		health: 1000,
		trunk: {
			cells: 30,
			slots: 100
		},
		fuel: 'diesel'
	},
	jet: {
		tank: 90,
		health: 1000,
		trunk: {
			cells: 1,
			slots: 2
		},
		fuel: 'diesel'
	},
	boat: {
		tank: 40,
		health: 1000,
		trunk: {
			cells: 6,
			slots: 8
		},
		fuel: 'low'
	}
};
