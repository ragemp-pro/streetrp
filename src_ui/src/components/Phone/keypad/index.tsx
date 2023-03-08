import React, { Component } from 'react';
import { connect } from 'react-redux';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import { setCall } from 'store/phone/actions';
import prettify from 'utils/prettify';
import List from './list';
import Controls from './controls';

type Props = {} & typeof mapDispatchToProps;

type State = {
	phoneNumber: string;
};

class PhoneKeypad extends Component<Props, State> {
	readonly state: State = {
		phoneNumber: ''
	};

	addToNumber( key: string ) {
		this.setState( ( state ) => ( { phoneNumber: state.phoneNumber.concat( key ) } ) );
	}

	deleteFromNumber() {
		this.setState( ( state ) => ( { phoneNumber: state.phoneNumber.slice( 0, -1 ) } ) );
	}

	async call() {
		const { phoneNumber } = this.state;

		if ( !phoneNumber ) return;

		try {
			await rpc.callServer( 'Phone-Call', phoneNumber );

			this.props.setCall( {
				phoneNumber,
				type: 'outgoing'
			} );
		} catch ( err: any ) {
			showNotification( 'error', 'Абонент временно недоступен' );
		}
	}

	render() {
		const { phoneNumber } = this.state;

		return (
			<div className="phone_keypad">
				<div className="phone_keypad-value">{prettify.phoneNumber( phoneNumber )}</div>

				<List addToNumber={this.addToNumber.bind( this )} />

				<Controls
					phoneNumber={phoneNumber}
					callNumber={this.call.bind( this )}
					deleteFromNumber={this.deleteFromNumber.bind( this )}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = {
	setCall
};

export default connect( null, mapDispatchToProps )( PhoneKeypad );
