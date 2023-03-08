import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { RouteComponentProps } from 'react-router-dom';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import withRotation from 'components/Common/with-rotation';
import Page from 'components/Character/page';
import Body from 'components/Character/body';
import Face from 'components/Character/face';
import GradientButton from 'components/Common/gradient-button';
import TotalPrice from 'components/Common/total-price';
import Hint from 'components/Common/hint';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	activePage: string;
	price: number;
};

const pages: { [name: string]: string } = {
	body: 'Персонаж',
	face: 'Черты лица'
};

class Surgeon extends Component<Props, State> {
	readonly state: State = {
		activePage: 'body',
		price: 0
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	getPageComponent() {
		const { activePage } = this.state;

		switch (activePage) {
			case 'body':
				return <Body />;

			case 'face':
				return <Face />;

			default:
				break;
		}
	}

	openPage(name: string) {
		this.setState(() => ({ activePage: name }));
	}

	switchPage(increase: boolean) {
		const items = Object.keys(pages);
		const pageIndex = items.indexOf(this.state.activePage);

		if (increase && pageIndex === items.length - 1) {
			return this.props.showPayment(this.buy.bind(this));
		}

		if (!increase && pageIndex === 0) return this.close();

		this.openPage(increase ? items[pageIndex + 1] : items[pageIndex - 1]);
	}

	async buy(payment: string) {
		const data = await rpc.callClient('Surgeon-GetData');

		await rpc.callServer('Surgeon-Buy', [data, payment]);
	}

	close() {
		rpc.callClient('Surgeon-CloseMenu');
	}

	render() {
		const { activePage, price } = this.state;

		return (
			<div className="surgeon">
				<Page items={pages} current={activePage} open={this.openPage.bind(this)} />

				<div className="surgeon_container">
					<button className="character_btn" onClick={this.switchPage.bind(this, false)}>
						Назад
					</button>

					{this.getPageComponent()}

					<TotalPrice className="surgeon_price" title="Цена:" value={price} />

					<GradientButton onClick={this.switchPage.bind(this, true)}>
						Далее
					</GradientButton>
				</div>

				<Hint className="character_hint" action="drag">
					Поворот персонажа
				</Hint>
			</div>
		);
	}
}

export default withPayment(withRotation(Surgeon));
