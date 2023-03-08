import React, { Component } from 'react';
import { connect } from 'react-redux';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import PlayerCash from 'components/Player/cash';
import TargetMenu from 'components/Target';
import Location from './location';
import Binds from './binds';
import Online from './online';
import Money from './money';
import Date from './date';
import Speedometer from './speedometer';
import Tasks from './tasks';
import Mic from './mic';
import Ammo from './ammo';
import Hunger from './hunger';
import Interact from './interact';
import Call from './call';
import Offer from './offer';
import Level from './level';
import Capture from './capture';
import Bonus from './bonus';

type Props = {} & ReturnType<typeof mapStateToProps>;
type State = {
	binds: {
		[name: string]: string;
	};
	position: {
		bottom: number;
		left: number;
	};
};

class HUD extends Component<Props, State> {
	readonly state: State = {
		binds: {},
		position: {
			bottom: 2,
			left: 10
		}
	};

	componentDidMount() {
		rpc.callClient('HUD-GetBinds').then((binds) => this.setState(() => ({ binds })));

		this.getDistToMinimap();
	}

	async getDistToMinimap() {
		const data = await rpc.callClient('HUD-GetMinimapAnchor');

		this.setState(() => ({
			position: { left: data.rightX * 100, bottom: (1 - data.bottomY) * 100 }
		}));
	}

	render() {
		const { binds, position } = this.state;
		const { app, hud, player, phone } = this.props;

		return (
			<div className="hud" style={{ display: hud.visible ? 'block' : 'none' }}>
				<Binds items={binds} />
				<Online playerId={player.id} count={app.online} />
				<Money cash={player.money.cash} bank={player.money.bank} />
				<Mic bind={binds.mic} />
				<Ammo />
				<Interact />
				<Offer />
				<Level />

				{hud.tasks && <Tasks items={player.tasks} />}

				<div
					className="hud_minimap"
					style={{
						left: `calc(${position.left}% + 2%)`,
						bottom: `calc(${position.bottom}% + 2.5px)`
					}}
				>
					<Hunger amount={player.satiety} />
					<Location />

					{phone.call?.type === 'incoming' && <Call info={phone.call} />}
				</div>

				<div className="hud_container">
					<Date value={app.date} />
					<Speedometer binds={binds} />
				</div>

				<TargetMenu />
				<PlayerCash />

				{hud.capture && <Capture {...hud.capture} />}
				{player.bonus > 0 && <Bonus time={player.bonus} />}
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	app: state.app,
	hud: state.hud,
	player: state.player,
	phone: state.phone
});

export default connect(mapStateToProps, {})(HUD);
