import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { connect } from 'react-redux';
import { showNotification } from 'utils/notifications';
import { setCall } from 'store/phone/actions';
import Navigation from '../../partials/navigation';
import Button from '../../partials/button';
import { ContactData } from '../index';
import Info from './info';
import Controls from './controls';

type Props = {
	contact: ContactData;
	blocked: boolean;
	showEditor: () => void;
	toggleBlacklist: () => void;
	close: () => void;
	setCall: typeof setCall;
};

class Contact extends Component<Props> {
	async onControlClick( type: string ) {
		const { contact } = this.props;

		if ( type !== 'call' ) return;

		try {
			await rpc.callServer( 'Phone-Call', contact.phone );

			this.props.setCall( {
				type: 'outgoing',
				phoneNumber: contact.phone
			} );
		} catch ( err: any ) {
			showNotification( 'error', 'Абонент временно недоступен' );
		}
	}

	render() {
		const { close, showEditor, toggleBlacklist, contact, blocked } = this.props;

		return (
			<div className="contacts_contact">
				<Navigation
					close={{ title: 'Контакты', onClick: close }}
					action={{ title: 'Править', onClick: showEditor }}
				/>

				<div className="contacts_contact-header">
					<div className="avatar">{`${ contact.firstName.charAt(
						0
					) }${ contact.lastName.charAt( 0 ) }`}</div>

					<p className="name">{`${ contact.firstName } ${ contact.lastName }`}</p>

					<Controls onClick={this.onControlClick.bind( this )} />
				</div>

				<Info phone={contact.phone} />

				<Button onClick={toggleBlacklist} color="red">
					{blocked ? 'Разблокировать' : 'Заблокировать'}
				</Button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	setCall
};

export default connect( () => ( {} ), mapDispatchToProps )( Contact );
