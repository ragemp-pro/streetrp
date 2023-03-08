import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import prettify from 'utils/prettify';
import withRotation from 'components/Common/with-rotation';
import Selector from 'components/Common/selector';
import GradientButton from 'components/Common/gradient-button';
import Hint from 'components/Common/hint';
import Point from 'components/Common/point';
import vehicles from 'data/vehicles.json';
import Info from './info';
import Spec from './spec';
import Color from './color';

type Props = {} & RouteComponentProps<
	{},
	{},
	{ type: string; prices: { [ name: string ]: number } }
>;
type State = {
	type: string;
	prices: { [ name: string ]: number };
	selectedVeh: string;
	color: number[];
};

class VehicleShop extends Component<Props, State> {
	readonly state: State = {
		type: '',
		prices: {},
		color: [ 0, 0, 0 ],
		selectedVeh: ''
	};

	componentDidMount() {
		const { type, prices } = this.props.location.state;
		const keys = Object.keys( prices );

		this.setState( () => ( {
			type,
			prices
		} ) );
		this.selectVehicle( keys[ 0 ] );
	}

	getNamesList( items: string[] ) {
		const names: { [ key: string ]: string } = {};

		items.forEach( ( item ) => {
			names[ item ] = ( vehicles as any )[ item ];
		} );

		return names;
	}

	async selectVehicle( model: string ) {
		await rpc.callClient( 'VehicleShop-SetVehicle', model );

		this.setState( () => ( { selectedVeh: model } ) );
	}

	async selectColor( color: number[] ) {
		await rpc.callClient( 'VehicleShop-ChangeColor', [ color ] );

		this.setState( () => ( { color } ) );
	}

	startTestDrive() {
		rpc.callClient( 'VehicleShop-TestDrive', this.state.selectedVeh );
	}

	async buy() {
		const { type, selectedVeh, color } = this.state;

		try {
			await rpc.callServer( 'VehicleShop-Buy', [ type, selectedVeh, color ] );

			showNotification(
				'success',
				'Вы успешно приобрели ТС, доставить его можно через приложение в телефоне'
			);
		} catch ( err: any ) {
			showNotification( 'error', err.msg );
		}
	}

	render() {
		const { type, prices, selectedVeh, color } = this.state;

		return (
			<div className="vehicle-shop">
				<Hint className="vehicle-shop_hint" action="exit">
					Нажмите, чтобы закрыть меню
				</Hint>

				<Info model={selectedVeh} />
				<Spec model={selectedVeh} />

				<Color current={color} select={this.selectColor.bind( this )} />

				<div className="vehicle-shop_main">
					<span className="vehicle-shop_price">
						{type === 'vip_shop' ? (
							<Point className="vehicle-shop_price" amount={prices[ selectedVeh ]} />
						) : (
							prettify.price( prices[ selectedVeh ] )
						)}
					</span>

					<Selector
						className="vehicle-shop_selector"
						items={Object.keys( prices )}
						value={selectedVeh}
						customValue={( vehicles as any )[ selectedVeh ]}
						onChange={this.selectVehicle.bind( this )}
					/>

					<div className="vehicle-shop_buttons">
						<GradientButton color="purple" onClick={this.startTestDrive.bind( this )}>
							Тест-драйв
						</GradientButton>

						<GradientButton onClick={this.buy.bind( this )}>Купить</GradientButton>
					</div>
				</div>
			</div>
		);
	}
}

export default withRotation( VehicleShop );
