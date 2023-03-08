import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import withPayment, { WrappedProps } from 'components/Common/with-payment';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import Item from './item';
import ScrollControls from './scroll';

type Props = {} & WrappedProps & RouteComponentProps;
type State = {
	prices: { [name: string]: number };
	licenses: { [name: string]: string };
	updatePercent: number;
};

class Licenses extends Component<Props, State> {
	list = React.createRef<HTMLDivElement>();

	readonly state: State = {
		prices: {},
		licenses: {},
		updatePercent: 50
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	isValidLicense(license: string) {
		const date = this.state.licenses[license];

		return !!date && moment().diff(date, 'days') <= 0;
	}

	getPrice(license: string) {
		const { prices, licenses, updatePercent } = this.state;

		const price = prices[license];
		const isBought = !!licenses[license];

		return isBought ? price - (price / 100) * updatePercent : price;
	}

	async buy(name: string, payment: string) {
		const { licenses } = this.state;

		await rpc.callServer('Licenses-Buy', [name, payment]);

		this.setState(() => ({
			licenses: { ...licenses, [name]: moment().add(1, 'months').toISOString() }
		}));
	}

	render() {
		const { prices } = this.state;

		return (
			<div className="licenses">
				<PrimaryTitle className="licenses_title">Мэрия</PrimaryTitle>

				<div ref={this.list} className="licenses_items">
					{Object.keys(prices).map((license) => (
						<Item
							key={license}
							name={license}
							price={this.getPrice(license)}
							bought={this.isValidLicense(license)}
							buy={() => this.props.showPayment(this.buy.bind(this, license))}
						/>
					))}
				</div>

				<ScrollControls list={this.list} />

				<OutlineButton className="licenses_close" isClose>
					Закрыть
				</OutlineButton>
			</div>
		);
	}
}

export default withPayment(Licenses);
