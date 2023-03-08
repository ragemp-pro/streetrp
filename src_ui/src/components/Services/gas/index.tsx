import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import TotalPrice from 'components/Common/total-price';
import Current from './current';
import Input from './input';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	type: string;
	fuel: {
		current: number;
		max: number;
	};
	basket: {
		[name: string]: number;
	};
	prices: {
		[name: string]: number;
	};
};

const products: { [name: string]: string } = {
	fuel: 'Топливо',
	jerrycan: 'Канистра',
	repair_kit: 'Рем. комплект'
};

class Gas extends Component<Props, State> {
	readonly state: State = {
		type: 'low',
		fuel: {
			current: 0,
			max: 0
		},
		basket: {},
		prices: {}
	};

	componentDidMount() {
		this.setState(() => ({
			...this.props.location.state as any,
			basket: this.getEmptyBasket()
		}));
	}

	changeBasketItem(name: string, amount: number) {
		this.setState((state) => ({ basket: { ...state.basket, [name]: amount } }));
	}

	getEmptyBasket() {
		const basket: { [name: string]: number } = {};

		Object.keys(products).forEach((name) => {
			basket[name] = 0;
		});

		return basket;
	}

	getTotalPrice() {
		const { prices, basket } = this.state;
		const price = Object.entries(basket).reduce(
			(sum, [name, amount]) => sum + amount * (prices[name] ?? 0),
			0
		);

		return price;
	}

	async buy(payment: string) {
		const { fuel, basket } = this.state;

		await rpc.callServer('Gas-Buy', [basket, payment]);

		this.setState(() => ({
			basket: this.getEmptyBasket(),
			fuel: { ...fuel, current: fuel.current + (basket.fuel || 0) }
		}));
	}

	render() {
		const { type, fuel, prices, basket } = this.state;

		return (
			<div className="gas">
				<Current percent={(fuel.current * 100) / fuel.max || 0} type={type} />

				<div className="gas_main">
					<PrimaryTitle className="gas_main-title">Заправка</PrimaryTitle>

					<div className="gas_fields">
						{Object.entries(products).map(([key, name]) => (
							<div className="gas_fields-item" key={key}>
								<div className="header">
									<span className="header_name">{name}</span>
									<span className="header_price">{prices[key]} $</span>
								</div>

								<Input
									value={basket[key]}
									min={0}
									max={key === 'fuel' ? fuel.max - fuel.current : 20}
									onChange={this.changeBasketItem.bind(this, key)}
								/>
							</div>
						))}
					</div>

					<TotalPrice className="gas_price" value={this.getTotalPrice()} />

					<div className="gas_buttons">
						<OutlineButton onClick={() => rpc.callClient('Gas-CloseMenu')}>
							Закрыть
						</OutlineButton>

						<GradientButton onClick={() => this.props.showPayment(this.buy.bind(this))}>
							Купить
						</GradientButton>
					</div>
				</div>
			</div>
		);
	}
}

export default withPayment(Gas);
