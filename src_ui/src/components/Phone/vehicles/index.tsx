import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import Title from '../partials/title';
import List from './list';
import Vehicle from './vehicle';

export type VehicleData = {
	id: string;
	model: string;
	govNumber: string;
	spawned: boolean;
};

type State = {
	vehicles: VehicleData[];
	selectedVehicle?: VehicleData;
};

export default class Vehicles extends Component<{}, State> {
	readonly state: State = {
		vehicles: []
	};

	componentDidMount() {
		rpc
			.callServer( 'Vehicle-GetPlayerList' )
			.then( ( items ) => this.setState( () => ( { vehicles: items } ) ) );
	}

	selectVehicle( vehicle?: VehicleData ) {
		this.setState( () => ( { selectedVehicle: vehicle } ) );
	}

	async getVehiclePosition() {
		const { selectedVehicle } = this.state;

		if ( !selectedVehicle ) return;

		try {
			await rpc.callServer( 'Vehicle-MarkPosition', selectedVehicle.id );

			showNotification( 'info', 'Местоположение ТС отмечено на карте' );
		} catch ( err: any ) {
			showNotification( 'error', 'Сначала закажите данное ТС' );
		}
	}

	async spawnVehicle() {
		const { selectedVehicle } = this.state;
		if ( !selectedVehicle ) return;

		try {
			const position = await rpc.callClient(
				'Vehicle-GetSpawnCoords',
				selectedVehicle.model
			);
			await rpc.callServer( 'Vehicle-DeliverForPlayer', [ selectedVehicle.id, position ] );

			showNotification( 'info', 'Ваше ТС скоро будет доставлено' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	async despawnVehicle() {
		const { selectedVehicle } = this.state;

		if ( !selectedVehicle ) return;

		try {
			await rpc.callServer( 'Vehicle-DespawnItem', selectedVehicle.id );

			showNotification( 'info', 'Ожидайте эвакуации в ближайшее время.' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { vehicles, selectedVehicle } = this.state;

		return (
			<div className="vehicles">
				{selectedVehicle ? (
					<Vehicle
						data={selectedVehicle}
						getPosition={this.getVehiclePosition.bind( this )}
						spawn={this.spawnVehicle.bind( this )}
						despawn={this.despawnVehicle.bind( this )}
						close={() => this.selectVehicle()}
					/>
				) : (
					<div className="vehicles_main">
						<Title className="vehicles_main-title">Ваш транспорт</Title>

						<List items={vehicles} selectItem={this.selectVehicle.bind( this )} />
					</div>
				)}
			</div>
		);
	}
}
