import React, { Component } from 'react';
import rpc from 'utils/rpc';
import classNames from 'classnames';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import prettify from 'utils/prettify';
import { WrappedProps } from 'components/Common/with-payment';
import PrimaryTitle from 'components/Common/primary-title';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import OutlineInput from 'components/Common/outline-input';

const types: { [name: string]: string } = {
	'9mm': 'Малый',
	'7.62mm': 'Крупный',
	'12gauge': 'Дробь'
};

type Props = {
	prices: { [name: string]: number };
} & WrappedProps;
type State = {
	type: string;
	amount: number;
};

export default class WeaponsAmmo extends Component<Props, State> {
	readonly state: State = {
		type: '9mm',
		amount: 0
	};

	setType(name: string) {
		this.setState(() => ({ type: name }));
	}

	setAmount(amount: number) {
		this.setState(() => ({ amount }));
	}

	async buy(payment: string) {
		const { type, amount } = this.state;

		if (!amount || amount < 0 || !types[type]) throw new Error('wrong data');

		await rpc.callServer('Weapons-BuyAmmo', [type, amount, payment]);

		this.setState(() => ({ amount: 0 }));
	}

	render() {
		const { type, amount } = this.state;

		return (
			<div className="weapons_ammo">
				<PrimaryTitle className="weapons_ammo-title">Патроны</PrimaryTitle>

				<div className="weapons_ammo-types">
					{Object.entries(types).map(([name, title]) => (
						<OutlineButton
							className={classNames('weapons_ammo-type', {
								active: type === name
							})}
							key={name}
							onClick={() => this.setType(name)}
						>
							{title}
						</OutlineButton>
					))}
				</div>

				<div className="weapons_ammo-amount">
					<h4 className="title">Количество</h4>

					<OutlineInput
						value={amount}
						max={1000}
						min={0}
						onChange={this.setAmount.bind(this)}
					/>
				</div>

				<div className="weapons_ammo-footer">
					<AnimatedNumber
						className="weapons_ammo-price"
						value={this.props.prices[type] * amount}
						duration={300}
						formatValue={prettify.price}
					/>

					<GradientButton
						className="weapons_ammo-submit"
						color="green"
						onClick={() => this.props.showPayment(this.buy.bind(this))}
					>
						Купить
					</GradientButton>
				</div>
			</div>
		);
	}
}
