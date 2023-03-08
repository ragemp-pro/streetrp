import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { RouteComponentProps } from 'react-router-dom';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import withRotation from 'components/Common/with-rotation';
import Appearance from 'components/Character/appearance';
import GradientButton from 'components/Common/gradient-button';
import TotalPrice from 'components/Common/total-price';
import Hint from 'components/Common/hint';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	price: number;
};

class Barbershop extends Component<Props, State> {
	readonly state: State = {
		price: 0
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	async buy(payment: string) {
		const data = await rpc.callClient('Barbershop-GetData');

		await rpc.callServer('Barbershop-Buy', [data, payment]);
	}

	close() {
		rpc.callClient('Barbershop-CloseMenu');
	}

	render() {
		const { price } = this.state;

		return (
			<div className="barbershop">
				<Hint className="character_hint" action="drag">
					Поворот персонажа
				</Hint>

				<div className="barbershop_container">
					<button className="character_btn" onClick={this.close.bind(this)}>
						Назад
					</button>

					<Appearance />

					<TotalPrice className="barbershop_price" title="Цена:" value={price} />

					<GradientButton onClick={() => this.props.showPayment(this.buy.bind(this))}>
						Купить
					</GradientButton>
				</div>
			</div>
		);
	}
}

export default withPayment(withRotation(Barbershop));
