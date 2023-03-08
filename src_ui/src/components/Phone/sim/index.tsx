import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import logo from 'assets/images/phone/racoon-logo.svg';
import Form from './form';
import Prices from './prices';
import Button from './button';

type State = {
	form?: 'random' | 'custom';
	phoneNumber: string;
	prices: {
		random: number;
		custom: number;
	};
};

export default class Sim extends Component<{}, State> {
	readonly state: State = {
		phoneNumber: '',
		prices: {
			random: 0,
			custom: 0
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		const data = await rpc.callServer( 'Phone-GetNumberData' );

		this.setState( () => data );
	}

	openForm( name?: State[ 'form' ] ) {
		this.setState( () => ( { form: name } ) );
	}

	async buy( num?: string ) {
		try {
			const updated: string = await rpc.callServer( 'Phone-BuyNumber', num?.trim() );

			this.setState( () => ( { phoneNumber: updated, form: undefined } ) );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { form, phoneNumber, prices } = this.state;

		return (
			<div className="sim">
				<div className="sim_logo">
					<img src={logo} alt="racoon" />
				</div>

				{form ? (
					<Form
						submit={this.buy.bind( this )}
						close={this.openForm.bind( this, undefined )}
						custom={form === 'custom'}
					/>
				) : (
					<form className="sim_form">
						<input type="text" value={phoneNumber || 'Отсутствует'} readOnly />

						<Button onClick={this.openForm.bind( this, 'random' )}>Случайный</Button>
						<Button onClick={this.openForm.bind( this, 'custom' )}>Желаемый</Button>
					</form>
				)}

				<Prices random={prices.random} custom={prices.custom} />
			</div>
		);
	}
}
