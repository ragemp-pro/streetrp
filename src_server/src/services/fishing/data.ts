export type FishingLocation = PositionEx & {
	radius: number;
	level: number;
};

export const locations: FishingLocation[] = [
	{
		x: -1256.408,
		y: 4378.824,
		z: 4.244,
		radius: 18,
		level: 1
	},
	{
		x: -1214.171,
		y: 4392.421,
		z: 8.165,
		radius: 18,
		level: 1
	},
	{
		x: -536.652,
		y: 2924.715,
		z: 14.133,
		radius: 18,
		level: 1
	},
	{
		x: 2036.511,
		y: 4222.331,
		z: 97.136,
		radius: 150,
		level: 2
	},
	{
		x: 1195.778,
		y: 3999.515,
		z: 83.497,
		radius: 150,
		level: 2
	},
	{
		x: -1449.139,
		y: 5840.072,
		z: 3.424,
		radius: 350,
		level: 3
	},
	{
		x: 4292.723,
		y: 4810.631,
		z: 3.212,
		radius: 350,
		level: 3
	}
];

type FishingLevel = {
	points: number;
	fish: { [name: string]: number };
};

export const levels: FishingLevel[] = [
	{
		points: 1500,
		fish: {
			perch: 40,
			pike: 30,
			eel: 20,
			trout: 10
		}
	},
	{
		points: 5000,
		fish: {
			perch: 30,
			zander: 20,
			pike: 15,
			catfish: 15,
			trout: 10,
			sturgeon: 10
		}
	},
	{
		points: 7000,
		fish: {
			eel: 45,
			tuna: 35,
			salmon: 12,
			stingray: 5,
			fugu: 3
		}
	}
];
