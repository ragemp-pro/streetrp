import React, { Component } from 'react';
import rpc from 'utils/rpc';
import classNames from 'classnames';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import Controls from './controls';
import RPM from './rpm';
import Fuel from './fuel';
import Engine from './engine';

type Props = {
	binds: {
		[name: string]: string;
	};
};
type State = typeof initialState;

const initialState = {
	inVehicle: false,
	engine: {
		health: 100,
		active: false
	},
	velocity: 0,
	rpm: 0,
	fuel: {
		current: 0,
		max: 100
	},
	locked: false,
	seatbelt: false,
	cruise: false
};

export default class Speedometer extends Component<Props, State> {
	readonly state: State = initialState;

	componentDidMount() {
		rpc.register('Speedometer-UpdateState', (state: State) => this.setState(() => state));
	}

	componentWillUnmount() {
		rpc.unregister('Speedometer-UpdateState');
	}

	render() {
		const {
			inVehicle,
			engine,
			velocity,
			rpm,
			fuel,
			cruise,
			locked,
			seatbelt
		} = this.state;

		return (
			inVehicle && (
				<div className={classNames('speedometer', { active: engine.active })}>
					<div className="speedometer_velocity">
						<AnimatedNumber
							value={velocity}
							duration={300}
							formatValue={(value: any) =>
								parseInt(value, 10).toString().padStart(3, '0')
							}
						/>

						<h5>КМ\Ч</h5>
					</div>

					<RPM amount={engine.active ? rpm : 0} />
					<Fuel amount={(fuel.current * 100) / fuel.max} />
					<Engine health={engine.health} />

					<Controls
						binds={this.props.binds}
						engine={engine.active}
						cruise={cruise}
						lock={locked}
						seatbelt={seatbelt}
					/>
				</div>
			)
		);
	}
}
