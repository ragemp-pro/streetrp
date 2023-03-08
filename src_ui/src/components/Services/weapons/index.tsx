import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { RouteComponentProps } from 'react-router-dom';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import TotalPrice from 'components/Common/total-price';
import Categories from './categories';
import Preview from './preview';
import Spec from './spec';
import Ammo from './ammo';
import List from './list';

type Props = {} & WrappedProps &
	RouteComponentProps<{}, {}, { prices: { [name: string]: number } }>;
type State = {
	prices: { [name: string]: number };
	activeCategory: string;
	selectedWeapon: string;
};

class Weapons extends Component<Props, State> {
	readonly state: State = {
		prices: {},
		activeCategory: 'melee',
		selectedWeapon: 'bottle'
	};

	componentDidMount() {
		const { prices } = this.props.location.state;

		this.setState(() => ({ prices, selectedWeapon: Object.keys(prices)[0] }));
	}

	setCategory(name: string) {
		this.setState(() => ({ activeCategory: name }));
	}

	selectWeapon(name: string) {
		this.setState(() => ({ selectedWeapon: name }));
	}

	async buy(payment: string) {
		const { selectedWeapon } = this.state;

		await rpc.callServer('Weapons-Buy', [selectedWeapon, payment]);
	}

	render() {
		const { prices, activeCategory, selectedWeapon } = this.state;

		return (
			<div className="weapons">
				<div className="weapons_main">
					<Categories current={activeCategory} select={this.setCategory.bind(this)} />

					<PrimaryTitle className="weapons_title">Ammu-Nation</PrimaryTitle>
					<List
						category={activeCategory}
						selected={selectedWeapon}
						selectItem={this.selectWeapon.bind(this)}
					/>

					<div className="weapons_footer">
						<OutlineButton isClose>Закрыть</OutlineButton>

						<TotalPrice className="weapons_price" value={prices[selectedWeapon]} />

						<GradientButton onClick={() => this.props.showPayment(this.buy.bind(this))}>
							Купить
						</GradientButton>
					</div>
				</div>

				<div className="weapons_container">
					<Preview weapon={selectedWeapon} />
					<Spec weapon={selectedWeapon} />

					<Ammo prices={prices} showPayment={this.props.showPayment} />
				</div>
			</div>
		);
	}
}

export default withPayment(Weapons);
