import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IoAlbums } from 'react-icons/io5';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import TotalPrice from 'components/Common/total-price';
import Products from './products';
import Quantity from './quantity';

type Props = {} & RouteComponentProps;
type State = {
	materials: number;
	prices: {
		[ name: string ]: number;
	};
	selectedProduct?: {
		name: string;
		amount: number;
	};
};

export default class Workshop extends Component<Props, State> {
	readonly state: State = {
		materials: 0,
		prices: {}
	};

	componentDidMount() {
		this.setState( () => this.props.location.state );
	}

	selectProduct( name: string ) {
		this.setState( () => ( { selectedProduct: { name, amount: 1 } } ) );
	}

	changeAmountOfProduct( value: number ) {
		const { selectedProduct } = this.state;

		if ( selectedProduct ) {
			this.setState( () => ( { selectedProduct: { ...selectedProduct, amount: value } } ) );
		}
	}

	getTotalPrice() {
		const { prices, selectedProduct } = this.state;

		return selectedProduct ? selectedProduct.amount * prices[ selectedProduct.name ] : 0;
	}

	async getProduct() {
		const { selectedProduct } = this.state;

		if ( !selectedProduct ) return;

		try {
			const materials: number = await rpc.callServer( 'FactionWorkshop-CraftItem', [
				selectedProduct.name,
				selectedProduct.amount
			] );

			this.setState( () => ( { materials, selectedProduct: undefined } ) );
			showNotification( 'success', 'Вы успешно изготовили предмет' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { materials, prices, selectedProduct } = this.state;

		return (
			<div className="workshop">
				<div className="workshop_container">
					<div className="workshop_header">
						<PrimaryTitle className="workshop_title">Мастерская</PrimaryTitle>

						<div className="workshop_balance">
							<IoAlbums />
							<span>{prettify.materials( materials )}</span>
						</div>
					</div>

					<Products
						items={prices}
						selected={selectedProduct?.name}
						selectItem={this.selectProduct.bind( this )}
					/>
					<Quantity
						value={selectedProduct?.amount ?? 0}
						select={this.changeAmountOfProduct.bind( this )}
					/>
				</div>

				<div className="workshop_footer">
					<OutlineButton isClose>Закрыть</OutlineButton>

					<TotalPrice
						className="workshop_price"
						titleClassName="workshop_price-title"
						value={this.getTotalPrice()}
						formatter={prettify.materials}
					/>

					<GradientButton onClick={this.getProduct.bind( this )}>Изготовить</GradientButton>
				</div>
			</div>
		);
	}
}
