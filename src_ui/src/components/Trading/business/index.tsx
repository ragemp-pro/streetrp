import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Selector from 'components/Common/selector';
import Bottom from '../bottom';

type State = {
	items: number[];
	selectedItem: number;

	price: number;
	seller: string;

	name: string;
	govPrice: number;
	income: number;
};
type Props = {} & RouteComponentProps<{}, {}, { items: number[] }>;

export default class BusinessSale extends Component<Props, State> {
	readonly state: State = {
		items: [],
		selectedItem: 0,

		price: 0,
		seller: '',

		name: '',
		govPrice: 0,
		income: 0
	};

	componentDidMount() {
		const data = this.props.location.state;
		this.setState(() => data);
		this.selectItem(data.items[0]);
	}

	async selectItem(index: number) {
		const data = await rpc.callServer('BusinessTrade-GetData', index);
		this.setState(() => ({ ...data, selectedItem: index }));
	}

	changePrice(value: number) {
		this.setState(() => ({ price: value }));
	}

	sell() {
		const { price, selectedItem } = this.state;
		rpc.callClient('BusinessTrade-SendOffer', [selectedItem, price]);
	}

	buy() {
		rpc.callClient('BusinessTrade-ConfirmOffer');
	}

	refuse() {
		rpc.callClient('BusinessTrade-RefuseOffer');
	}

	render() {
		const { items, selectedItem, price, seller, govPrice, name, income } = this.state;

		return (
			<div className="trading trading--business">
				<div className="trading_top">
					<PrimaryTitle className="trading_title">
						{`${seller ? 'Покупка' : 'Продажа'} бизнеса`}
					</PrimaryTitle>

					<Selector
						className="trading_selector"
						items={items}
						value={selectedItem}
						customValue={name}
						onChange={this.selectItem.bind(this)}
					/>

					<div className="trading_info">
						<div className="trading_info-items">
							<p className="trading_info-item">
								Гос. цена: <b>{prettify.price(govPrice)}</b>
							</p>
							<p className="trading_info-item">
								Доход: <b>{prettify.price(income)}</b>
							</p>
						</div>
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
