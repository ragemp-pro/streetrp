import logger from 'utils/logger';
import ServiceModel from 'models/Service';

//import { data } from './data';

const items: { [name: string]: Service } = {};

export default abstract class Service {
	protected name: string;

	private readonly blip: BlipsOptions;

	private readonly radius: number;

	protected constructor(name: string, blip: BlipsOptions, radius = 0) {
		this.name = name;
		this.blip = blip;
		this.radius = radius;

		this.subscribeToEvents();

		items[name] = this;
	}

	abstract onKeyPress(player: Player): void;

	protected onEnterShape?(player: Player): void;

	protected onExitShape?(player: Player): void;

	protected abstract subscribeToEvents(): void;

	load(data: (PositionEx & { radius?: number })[]) {
		data.forEach(({ radius, ...position }, index) =>
			this.create(position, radius || this.radius, index)
		);
	}

	private create(position: PositionEx, radius: number, index: number) {
		if (radius) {
			mp.colshapes.create(
				position,
				radius,
				{
					onKeyPress: this.onKeyPress.bind(this),
					onEnter: this.onEnterShape ? this.onEnterShape.bind(this) : undefined,
					onExit: this.onExitShape ? this.onExitShape.bind(this) : undefined
				},
				{ dimension: 0, data: index }
			);
		}

		if (this.blip) mp.blips.create(position, { ...this.blip });
	}
}

mp.events.subscribe({
	'Services-ShowMenu': (player: Player, name: string) => {
		const service = items[name];
		if (service) service.onKeyPress(player);
	}
});

/*
async function importServices() {
	Object.keys(items).forEach(async (item) => {
		const count = await ServiceModel.findOne({ name: item }).countDocuments();

		if(!count)
		{
			const insert = data.find(value => value.name == item);
			if(insert)
			{
				logger.success(`Service - \`${item}\` start loading default data ..`);
				await ServiceModel.insertMany(insert);
			}
		}
	});
}
*/

export async function loadServices() {

	//await importServices();

	const count = await ServiceModel.findOne().countDocuments();
	if(count)
	{
		const cursor = await ServiceModel.find().lean().cursor();

		cursor.on('data', (data: ServiceModel) => {
			const service = items[data.name];
			if (service) service.load(data.positions);
		});

		cursor.on('close', () => {
			logger.success(`Services loaded: ${Object.keys(items).length}`);
		});
	}
}
