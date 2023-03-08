import React, { Component } from 'react';
import rpc from 'utils/rpc';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import withRotation from 'components/Common/with-rotation';
import Selector from 'components/Common/selector';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Categories from './categories';
import Color from './color';
import Price from './price';
import Hint from './hint';

type Props = {} & WrappedProps;
type State = {
	activeCategory: string;
	items: number;
	colors: number;
	currentItem: number;
	currentColor: number;
	price: number;
};

class ClothingShop extends Component<Props, State> {
	readonly state: State = {
		activeCategory: 'hat',
		items: 0,
		colors: 1,
		currentItem: 0,
		currentColor: 0,
		price: 0
	};

	componentDidMount() {
		rpc.register('ClothingShop-SetData', this.setClothesData.bind(this));

		this.setCategory(this.state.activeCategory);
	}

	componentWillUnmount() {
		rpc.unregister('ClothingShop-SetData');
	}

	setClothesData(data: { price: number; colors: number }) {
		this.setState(() => data);
	}

	async setCategory(name: string) {
		const amount: number = await rpc.callClient('ClothingShop-ChangeType', name);

		this.setState(() => ({
			activeCategory: name,
			items: amount,
			currentItem: 0,
			currentColor: 0
		}));
	}

	async changeItem(index: number) {
		await this.setState(() => ({ currentItem: index, currentColor: 0 }));

		await rpc.callClient('ClothingShop-ChangeItem', [index, 0, true]);
	}

	async changeСolor(index: number) {
		await this.setState(() => ({ currentColor: index }));

		await rpc.callClient('ClothingShop-ChangeItem', [this.state.currentItem, index]);
	}

	buy = async (payment: string) => {
		const { activeCategory, currentItem, currentColor } = this.state;

		const data = {
			type: activeCategory,
			index: currentItem,
			color: currentColor
		};

		await rpc.callServer('ClothingShop-Buy', [data, payment]);
	};

	render() {
		const {
			activeCategory,
			items,
			colors,
			currentItem,
			currentColor,
			price
		} = this.state;

		return (
			<div className="clothing-shop">
				<Hint />

				<Categories current={activeCategory} setCategory={this.setCategory.bind(this)} />

				<div className="clothing-shop_container">
					<div className="clothing-shop_main">
						<Selector
							className="clothing-shop_selector"
							value={currentItem}
							items={[...Array(items).keys()]}
							onChange={this.changeItem.bind(this)}
						/>

						<Color
							current={currentColor}
							amount={colors}
							setColor={this.changeСolor.bind(this)}
						/>

						<Price value={price} />
					</div>

					<div className="clothing-shop_buttons">
						<GradientButton onClick={() => this.props.showPayment(this.buy)}>
							Купить
						</GradientButton>

						<OutlineButton onClick={() => rpc.callClient('ClothingShop-CloseMenu')}>
							Закрыть
						</OutlineButton>
					</div>
				</div>
			</div>
		);
	}
}

export default withPayment(withRotation(ClothingShop));
