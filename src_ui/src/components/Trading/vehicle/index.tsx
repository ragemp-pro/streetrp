import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Selector from 'components/Common/selector';
import vehicleList from 'data/vehicles.json';
import Spec from '../spec';
import Bottom from '../bottom';

type State = {
	vehicles: string[];
	selectedVehicle: string;

	model: string;
	govNumber: string;
	price: number;
	owners: number;
	seller: string;
	tuning: {
		armor: number;
		engine: number;
		brakes: number;
		transmission: number;
		turbo: number;
	};
};
type Props = {} & RouteComponentProps<{}, {}, Partial<State>>;

export default class VehicleTrade extends Component<Props, State> {
	readonly state = {
		vehicles: [],
		selectedVehicle: '',

		seller: '',
		price: 0,

		model: '',
		govNumber: '',
		owners: 0,
		tuning: {
			armor: 0,
			engine: 0,
			brakes: 0,
			transmission: 0,
			turbo: 0
		}
	};

	componentDidMount() {
		const { vehicles } = this.props.location.state;

		this.setState(() => ({ ...this.props.location.state } as any));

		if (vehicles) this.selectVehicle(vehicles[0]);
	}

	async selectVehicle(id: string) {
		const data = await rpc.callServer('VehicleTrade-GetData', id);

		if (data) this.setState(() => ({ ...data, selectedVehicle: id }));
	}

	changePrice(value: number) {
		this.setState(() => ({ price: value }));
	}

	sell() {
		const { seller, selectedVehicle, vehicles, ...data } = this.state;

		if (!data.price || data.price <= 0) return;

		rpc.callClient('VehicleTrade-SendOffer', [selectedVehicle, data]);
	}

	buy() {
		rpc.callClient('VehicleTrade-ConfirmOffer');
	}

	refuse() {
		rpc.callClient('VehicleTrade-RefuseOffer');
	}

	render() {
		const { vehicles, price, selectedVehicle, model, govNumber, owners, tuning, seller } =
			this.state;

		return (
			<div className="trading trading--vehicle">
				<div className="trading_top">
					<PrimaryTitle className="trading_title">
						{`${seller ? 'Покупка' : 'Продажа'} ТС`}
					</PrimaryTitle>

					<Selector
						className="trading_selector"
						items={vehicles}
						value={selectedVehicle}
						customValue={(vehicleList as any)[model]}
						onChange={this.selectVehicle.bind(this)}
					/>

					<div className="trading_info">
						<div className="trading_info-items">
							<p className="trading_info-item">
								Гос. номер: <b>{govNumber}</b>
							</p>

							<p className="trading_info-item">
								Владельцев: <b>{owners}</b>
							</p>
						</div>

						<Spec type="vehicle" items={tuning} />
					</div>
				</div>

				<Bottom seller={seller} price={price} setPrice={this.changePrice.bind(this)} />

				<div className="trading_footer">
					<OutlineButton onClick={this.refuse}>Закрыть</OutlineButton>

					{seller ? (
						<GradientButton onClick={this.buy}>Купить</GradientButton>
					) : (
						<GradientButton onClick={this.sell.bind(this)}>Предложить</GradientButton>
					)}
				</div>
			</div>
		);
	}
}
