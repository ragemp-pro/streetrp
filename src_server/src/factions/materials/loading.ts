import { ClientError } from 'utils/errors';
import points from 'helpers/points';
import hud from 'helpers/hud';

type Loader = {
	player: Player;
	interval: NodeJS.Timeout;
};

abstract class MaterialsLoading {
	public point: Point;

	protected loader?: Loader;

	constructor(position: PositionEx, radius = 10) {
		this.createPoint(position, radius);
	}

	get isActive() {
		return !!this.loader;
	}

	togglePoint(visible: boolean) {
		this.point.visible = visible;
	}

	stopLoading(reason?: string) {
		if (!this.loader) return;

		const { player } = this.loader;

		clearInterval(this.loader.interval);
		this.loader = null;

		if (reason && mp.players.exists(player.mp)) {
			hud.showNotification(player, 'error', reason);
		}
	}

	protected abstract checkCanBeLoaded(player: Player): Promise<Error>;

	protected abstract loadIteration(player: Player): Promise<any>;

	private createPoint(position: PositionEx, radius: number) {
		this.point = points.create(
			position,
			radius,
			{
				onKeyPress: this.interactOnPoint.bind(this),
				onExit: this.onExitPoint.bind(this)
			},
			{ color: [24, 132, 219, 100] }
		);
	}

	private interactOnPoint(player: Player) {
		if (this.isActive) return;

		this.checkCanBeLoaded(player)
			.then(() => this.startLoading(player))
			.catch((err) => {
				if (err instanceof ClientError) {
					hud.showNotification(player, 'error', err.message);
				}
			});
	}

	private onExitPoint(player: Player) {
		if (!this.loader || this.loader.player.dbId !== player.dbId) return;

		this.stopLoading('Загрузка материалов прекращена');
	}

	private async loadPartOfMaterials(player: Player) {
		try {
			await this.loadIteration(player);
		} catch (err) {
			const message = err instanceof ClientError && err.message;
			this.stopLoading(message);
		}
	}

	private startLoading(player: Player) {
		const interval = setInterval(this.loadPartOfMaterials.bind(this, player), 1000);

		this.loader = {
			player,
			interval
		};

		hud.showNotification(player, 'info', 'Началась загрузка материалов');
	}
}

export default MaterialsLoading;
