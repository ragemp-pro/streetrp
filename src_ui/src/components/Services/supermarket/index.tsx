import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import PrimaryTitle from 'components/Common/primary-title';
import TotalPrice from 'components/Common/total-price';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Products from './products';
import Quantity from './quantity';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	prices: {
		[name: string]: number;
	};
	selectedProduct?: {
		name: string;
		amount: number;
	};
};

class Supermarket extends Component<Props, State> {
	readonly state: State = {
		prices: {}
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	selectProduct(name: string) {
		this.setState(() => ({ selectedProduct: { name, amount: 1 } }));
	}

	changeAmountOfProduct(value: number) {
		const { selectedProduct } = this.state;

		if (selectedProduct) {
			this.setState(() => ({ selectedProduct: { ...selectedProduct, amount: value } }));
		}
	}

	getTotalPrice() {
		const { prices, selectedProduct } = this.state;

		return selectedProduct ? selectedProduct.amount * prices[selectedProduct.name] : 0;
	}

	async buy(payment: string) {
		const { selectedProduct } = this.state;

		if (!selectedProduct) return;

		await rpc.callServer('Supermarket-Buy', [selectedProduct, payment]);
		this.setState(() => ({ selectedProduct: undefined }));
	}

	render() {
		const { prices, selectedProduct } = this.state;

		return (
			<div className="supermarket">
				<div className="supermarket_container">
					<PrimaryTitle className="supermarket_title">Магазин 24/7</PrimaryTitle>

					<Products
						items={prices}
						selected={selectedProduct?.name}
						selectItem={this.selectProduct.bind(this)}
					/>
					<Quantity
						value={selectedProduct?.amount ?? 0}
						select={this.changeAmountOfProduct.bind(this)}
					/>
				</div>

				<div className="supermarket_footer">
					<OutlineButton isClose>Закрыть</OutlineButton>

					<TotalPrice
						className="supermarket_price"
						titleClassName="supermarket_price-title"
						value={this.getTotalPrice()}
					/>

					<GradientButton onClick={() => this.props.showPayment(this.buy.bind(this))}>
						Купить
					</GradientButton>
				</div>
			</div>
		);
	}
}

export default withPayment(Supermarket);
