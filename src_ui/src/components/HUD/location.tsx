import React, { Component } from 'react';
import classNames from 'classnames';
import rpc from 'utils/rpc';

type State = typeof initialState;

const initialState = {
	street: 'Улица Роуб',
	zone: 'Ла Пуерта',
	greenZone: false
};

export default class Location extends Component<{}, State> {
	readonly state = initialState;

	componentDidMount() {
		rpc.register('HUD-SetLocation', (data) => this.setState(data));

		this.getCurrentLocation();
	}

	componentWillUnmount() {
		rpc.unregister('HUD-SetLocation');
	}

	async getCurrentLocation() {
		const location = await rpc.callClient('getPlayerLocation');

		this.setState(() => location);
	}

	render() {
		const { street, zone, greenZone } = this.state;

		return (
			<div className={classNames('hud_location', { 'hud_location--green': greenZone })}>
				<h3 className="hud_location-street">{street}</h3>
				<h4 className="hud_location-zone">{zone}</h4>
			</div>
		);
	}
}
