import React, { Component } from 'react';
import { connect } from 'react-redux';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { setCall } from 'store/phone/actions';
import prettify from 'utils/prettify';
import { ContactData } from '../contacts';
import Incoming from './incoming';
import Outgoing from './outgoing';

type Props = {
	setCall: typeof setCall;
} & ReturnType<typeof mapStateToProps>;
type State = {
	interlocutor: string;
};

class Call extends Component<Props, State> {
	readonly state: State = {
		interlocutor: 'Anonymous'
	};

	componentDidMount() {
		this.getInterlocutorName();
	}

	async getInterlocutorName() {
		const { call } = this.props.phone;

		if ( call ) {
			const contact: ContactData = await rpc.callServer(
				'Phone-GetContactByNumber',
				call.phoneNumber
			);

			this.setState( () => ( {
				interlocutor: contact
					? `${ contact.firstName } ${ contact.lastName }`
					: prettify.phoneNumber( call.phoneNumber )
			} ) );
		}
	}

	async acceptCall() {
		const { call } = this.props.phone;

		if ( !call ) return;

		try {
			await rpc.callServer( 'Phone-AcceptCall' );

			this.props.setCall( {
				type: 'outgoing',
				phoneNumber: call.phoneNumber,
				isRecieve: true
			} );
		} catch ( err: any ) {
			this.declineCall();
		}
	}

	declineCall() {
		const { call } = this.props.phone;

		if ( call ) rpc.callServer( 'Phone-DeclineCall' );
	}

	onControlClick( control: string ) {
		switch ( control ) {
			case 'accept':
				return this.acceptCall();

			case 'decline':
				return this.declineCall();

			default:
				break;
		}
	}

	render() {
		const { interlocutor } = this.state;
		const { call } = this.props.phone;

		return (
			call && (
				<div className="call">
					{call.type === 'incoming' ? (
						<Incoming
							name={interlocutor}
							onControlClick={this.onControlClick.bind( this )}
						/>
					) : (
						<Outgoing
							name={interlocutor}
							isRecieveCall={!!call.isRecieve}
							onControlClick={this.onControlClick.bind( this )}
						/>
					)}
				</div>
			)
		);
	}
}

const mapStateToProps = ( state: StoreState ) => ( {
	phone: state.phone
} );

export default connect( mapStateToProps, { setCall } )( Call );
