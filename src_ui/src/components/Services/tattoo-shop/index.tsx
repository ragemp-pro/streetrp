import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { RouteComponentProps } from 'react-router-dom';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import withRotation from 'components/Common/with-rotation';
import Selector from 'components/Common/selector';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Hint from 'components/Common/hint';
import Categories from './categories';
import Price from './price';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	activeCategory: string;
	items: number;
	currentItem: number;
	prices: { [name: string]: number };
	isExists: boolean;
};

class TattooShop extends Component<Props, State> {
	readonly state: State = {
		activeCategory: 'head',
		items: 0,
		currentItem: 0,
		prices: {},
		isExists: false
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);

		this.setCategory(this.state.activeCategory);
	}

	async setCategory(name: string) {
		const data = await rpc.callClient('TattooShop-ChangeType', name);

		this.setState(() => ({
			activeCategory: name,
			currentItem: 0,
			...data
		}));
	}

	async changeItem(index: number) {
		const isExists: boolean = await rpc.callClient('TattooShop-SetItem', index);

		this.setState(() => ({ currentItem: index, isExists }));
	}

	async buy(payment: string) {
		await rpc.callClient('TattooShop-Buy', payment);

		this.setState(() => ({ isExists: true }));
	}

	async remove(payment: string) {
		await rpc.callClient('TattooShop-Remove', payment);

		this.setState(() => ({ isExists: false }));
	}

	render() {
		const { activeCategory, items, currentItem, prices, isExists } = this.state;

		return (
			<div className="tattoo-shop">
				<Hint className="tattoo-shop_hint" action="drag">
					Поворот персонажа
				</Hint>

				<div className="tattoo-shop_container">
					<Categories
						current={activeCategory}
						setCategory={this.setCategory.bind(this)}
					/>

					<div className="tattoo-shop_main">
						<Selector
							className="tattoo-shop_selector"
							value={currentItem}
							items={[...Array(items).keys()]}
							onChange={this.changeItem.bind(this)}
						/>

						<Price value={prices[activeCategory]} />
					</div>
				</div>

				<div className="tattoo-shop_buttons">
					{isExists ? (
						<GradientButton
							color="purple"
							onClick={() => this.props.showPayment(this.remove.bind(this))}
						>
							Удалить
						</GradientButton>
					) : (
						<GradientButton onClick={() => this.props.showPayment(this.buy.bind(this))}>
							Купить
						</GradientButton>
					)}

					<OutlineButton onClick={() => rpc.callClient('TattooShop-CloseMenu')}>
						Закрыть
					</OutlineButton>
				</div>
			</div>
		);
	}
}

export default withPayment(withRotation(TattooShop));
