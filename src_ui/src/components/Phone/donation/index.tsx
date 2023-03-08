import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import { showNotification } from 'utils/notifications';
import OutlineButton from 'components/Common/outline-button';
import PhoneContext from '../context';
import products from './products.json';
import Balance from './balance';
import Product from './product';

type Props = {} & ReturnType<typeof mapStateToProps>;
type State = {
	prices: { [ name: string ]: number };
};

class Donation extends Component<Props, State> {
	readonly state: State = {
		prices: {
			'10k': 100,
			'50k': 500,
			'200k': 2000,
			'500k': 5000,
			'2kk': 20000,
			'10kk': 100000,
			vehicle_slot: 100,
			backpack: 100,
			military_id: 1500
		}
	};

	static contextType = PhoneContext;

	componentDidMount() {
		this.getPrices();
	}

	async getPrices() {
		const prices = await rpc.callServer( 'Donation-GetPrices' );
		this.setState( () => ( { prices } ) );
	}

	async buy( name: string ) {
		try {
			await rpc.callServer( 'Donation-Buy', name );
			showNotification( 'success', 'Успешная покупка!' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { prices } = this.state;

		return (
			<div className="donation">
				<div className="donation_container">
					<Balance current={this.props.money.points} />

					<div className="donation_products">
						{Object.entries( prices ).map( ( [ name, price ] ) => {
							const item = ( products as any )[ name ];

							return (
								<Product
									key={name}
									icon={item.icon}
									title={item.title}
									description={item.description}
									price={price}
									onClick={this.buy.bind( this, name )}
								/>
							);
						} )}
					</div>
				</div>

				<OutlineButton
					className="donation_close"
					onClick={() => this.context!.openApp( undefined )}
				>
					Закрыть
				</OutlineButton>
			</div>
		);
	}
}

const mapStateToProps = ( state: StoreState ) => ( {
	money: state.player.money
} );

export default connect( mapStateToProps, {} )( Donation );
