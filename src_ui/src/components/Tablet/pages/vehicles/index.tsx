import React, { Component } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import vehiclesList from 'data/vehicles.json';

export type Vehicle = {
	id: number;
	model: string;
	govNumber: string;
};

type State = {
	vehicles: Vehicle[];
};

export default class Vehicles extends Component<{}, State> {
	readonly state: State = {
		vehicles: []
	};

	componentDidMount() {
		rpc
			.callServer('Faction-GetVehicles')
			.then((vehicles) => this.setState(() => ({ vehicles })));
	}

	async despawnVehicle(id: number) {
		await rpc.callServer('Factions-DespawnVehicle', id);
		this.setState((state) => ({
			vehicles: state.vehicles.filter((item) => item.id !== id)
		}));

		showNotification('info', 'Механик в ближайшее время эвакуирует данное ТС');
	}

	render() {
		const { vehicles } = this.state;

		return (
			<Page>
				<Navbar title="Транспорт" />

				<List mediaList inset>
					{vehicles.map((vehicle) => (
						<ListItem
							checkbox
							key={vehicle.id}
							title={(vehiclesList as any)[vehicle.model] ?? vehicle.model}
							after={vehicle.govNumber}
							onChange={this.despawnVehicle.bind(this, vehicle.id)}
						/>
					))}
				</List>
			</Page>
		);
	}
}
