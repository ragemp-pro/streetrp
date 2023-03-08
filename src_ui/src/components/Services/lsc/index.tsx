import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RGBColor } from 'react-color';
import { StoreState } from 'store';
import { showNotification } from 'utils/notifications';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import withRotation from 'components/Common/with-rotation';
import OutlineButton from 'components/Common/outline-button';
import Money from 'components/HUD/money';
import Categories from './categories';
import Items from './items';
import Color from './color';
import Hints from './hints';
import { items } from './data';

type Props = {} & WrappedProps &
	ReturnType<typeof mapStateToProps> &
	RouteComponentProps<{}, {}, { prices: State['prices'] }>;

type State = typeof initialState & {
	activeCategory?: string;
	selectedItem?: number;
};

const initialState = {
	prices: {} as { [name: string]: number[] },
	installedItem: -1,
	color: { r: 0, g: 0, b: 0, a: 0 } as RGBColor,
	colorMenu: false,
	scrollPosition: 0
};

class Lsc extends Component<Props, State> {
	readonly state: State = initialState;

	componentDidMount() {
		this.setState(() => this.props.location.state);

		this.fetchCustomItems();
	}

	async fetchCustomItems() {
		Object.entries(items).forEach(async ([name, data]) => {
			if (data.length) return;

			const amount: number = await rpc.callClient('LSC-GetModAmount', name);

			for (let index = 0; index <= amount; index++) {
				data.push(index ? 'custom' : 'default');
			}
		});
	}

	async openCategory(name: string) {
		if (name !== 'repair' && items[name] && items[name].length <= 1) {
			return showNotification('error', 'Нет доступных деталей');
		}

		const installed: number = await rpc.callClient('LSC-SetCategory', name);

		this.setState(() => ({ activeCategory: name, installedItem: installed }));
	}

	toPrev() {
		this.setState(() => ({
			selectedItem: undefined,
			activeCategory: undefined,
			colorMenu: false,
			color: initialState.color
		}));
	}

	selectItem(id: number) {
		const { activeCategory } = this.state;

		if (!activeCategory) return;

		if (activeCategory === 'paint' || (activeCategory === 'neon' && id)) {
			this.setState(() => ({
				colorMenu: true,
				selectedItem: id,
				color: initialState.color
			}));
		} else {
			this.setState(() => ({ selectedItem: id, colorMenu: false }));
		}

		rpc.callClient('LSC-SetItem', id - 1);
	}

	changeColor(color: RGBColor) {
		this.setState(() => ({ color }));

		rpc.callClient('LSC-SetColor', [Object.values(color)]);
	}

	async buy(payment: string) {
		const { activeCategory, selectedItem, color } = this.state;

		if (typeof selectedItem !== 'number') return;

		const data = {
			name: activeCategory,
			model: selectedItem,
			color: Object.values(color)
		};

		await rpc.callServer('LSC-Buy', [data, payment]);

		const installed: number = await rpc.callClient(
			'LSC-GetInstalledItem',
			activeCategory
		);

		this.setState(() => ({ installedItem: installed }));
	}

	saveScrollPosition(value: number) {
		this.setState(() => ({ scrollPosition: value }));
	}

	render() {
		const { money } = this.props;

		const {
			activeCategory,
			selectedItem,
			installedItem,
			colorMenu,
			color,
			prices,
			scrollPosition
		} = this.state;

		return (
			<div className="lsc">
				<Hints />

				<div className="lsc_buttons">
					<OutlineButton
						className="lsc_buttons-item lsc_buttons-item--prev"
						disabled={!activeCategory}
						onClick={this.toPrev.bind(this)}
					>
						<span>Назад</span>
					</OutlineButton>

					{selectedItem !== undefined && selectedItem - 1 !== installedItem ? (
						<OutlineButton
							className="lsc_buttons-item"
							onClick={() => this.props.showPayment(this.buy.bind(this))}
						>
							<span>Купить</span>
						</OutlineButton>
					) : (
						<OutlineButton
							className="lsc_buttons-item"
							onClick={() => rpc.callClient('LSC-CloseMenu')}
						>
							<span>Закрыть</span>
						</OutlineButton>
					)}
				</div>

				{activeCategory ? (
					<Items
						category={activeCategory}
						items={items[activeCategory]}
						prices={prices[activeCategory]}
						selected={selectedItem}
						installed={installedItem}
						select={this.selectItem.bind(this)}
					/>
				) : (
					<Categories
						current={activeCategory}
						offset={scrollPosition}
						open={this.openCategory.bind(this)}
						onScroll={this.saveScrollPosition.bind(this)}
					/>
				)}

				{colorMenu && (
					<Color
						state={color}
						custom={activeCategory === 'paint' && selectedItem === 2}
						typeSelector={
							activeCategory === 'paint' && [0, 1].includes(selectedItem ?? -1)
						}
						onChange={this.changeColor.bind(this)}
					/>
				)}

				<Money cash={money.cash} bank={money.bank} />
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	money: state.player.money
});

export default connect(mapStateToProps, {})(withPayment(withRotation(Lsc)));
