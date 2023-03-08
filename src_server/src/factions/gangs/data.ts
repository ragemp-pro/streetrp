type Gang = {
	vehicleColor: RGBA;
	blip: BlipsOptions;
};

const gangs: { [name: string]: Gang } = {
	families: {
		vehicleColor: [3, 105, 25, 0],
		blip: { name: 'The Families', model: 84, color: 52 }
	},
	ballas: {
		vehicleColor: [70, 24, 107, 0],
		blip: { name: 'Ballas', model: 84, color: 58 }
	},
	vagos: {
		vehicleColor: [246, 204, 37, 0],
		blip: { name: 'LS Vagos', model: 84, color: 70 }
	},
	bloods: {
		vehicleColor: [150, 20, 20, 0],
		blip: { name: 'Blood Street Gang', model: 84, color: 59 }
	},
	marabunta: {
		vehicleColor: [47, 116, 181, 0],
		blip: { name: 'Marabunta Grande', model: 84, color: 77 }
	}
};

export default gangs;
