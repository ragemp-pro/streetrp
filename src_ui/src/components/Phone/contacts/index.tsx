import React, { Component, Fragment } from 'react';
import rpc from 'utils/rpc';
import { IoIosAdd } from 'react-icons/io';
import { showNotification } from 'utils/notifications';
import Title from '../partials/title';
import Navigation from '../partials/navigation';
import SearchInput from '../partials/search';
import List from './list';
import Contact from './contact';
import Editor from './editor';

export type ContactData = {
	phone: string;
	firstName: string;
	lastName: string;
};

type State = {
	contacts: ContactData[];
	blacklist: string[];
	showEditor: boolean;
	searchValue: string;
	selectedContact?: ContactData;
};

export default class Contacts extends Component<{}, State> {
	readonly state: State = {
		contacts: [],
		blacklist: [],
		showEditor: false,
		searchValue: ''
	};

	componentDidMount() {
		rpc.callServer( 'Phone-GetContactsData' ).then( ( data ) => this.setState( () => data ) );
	}

	toggleEditor() {
		this.setState( ( state ) => ( { showEditor: !state.showEditor } ) );
	}

	selectContact( contact?: ContactData ) {
		this.setState( () => ( { selectedContact: contact } ) );
	}

	async saveContact( data: ContactData ) {
		const { selectedContact: contact } = this.state;

		try {
			await rpc.callServer(
				contact ? 'Phone-EditContact' : 'Phone-AddContact',
				contact ? [ contact.phone, data ] : data
			);

			this.setState( ( state ) => ( {
				contacts: contact
					? state.contacts.map( ( item ) => ( item.phone === contact.phone ? data : item ) )
					: [ ...state.contacts, data ],
				selectedContact: data
			} ) );

			this.toggleEditor();
		} catch ( err: any ) {
			showNotification( 'error', 'Контакт с указанным номером уже существует' );
		}
	}

	async deleteContact() {
		const { selectedContact: contact } = this.state;

		if ( !contact ) return;

		await rpc.callServer( 'Phone-DeleteContact', contact.phone );

		this.setState( ( state ) => ( {
			contacts: state.contacts.filter( ( item ) => item.phone !== contact.phone ),
			selectedContact: undefined
		} ) );

		this.toggleEditor();
	}

	async toggleBlacklist() {
		const { selectedContact: contact } = this.state;

		if ( !contact ) return;

		const isBlocked = this.isBlocked( contact );

		await rpc.callServer(
			isBlocked ? 'Phone-UnblockContact' : 'Phone-BlockContact',
			contact.phone
		);

		this.setState( ( state ) => ( {
			blacklist: isBlocked
				? state.blacklist.filter( ( item ) => item !== contact.phone )
				: [ ...state.blacklist, contact.phone ]
		} ) );
	}

	getFilteredItems() {
		const { searchValue } = this.state;

		return this.state.contacts
			.filter( ( item ) => {
				const name = `${ item.firstName } ${ item.lastName }`;

				return name.toLowerCase().indexOf( searchValue.toLowerCase() ) !== -1;
			} )
			.sort( ( a, b ) => a.firstName.localeCompare( b.firstName ) );
	}

	isBlocked( contact: ContactData ) {
		return this.state.blacklist.includes( contact.phone );
	}

	render() {
		const { selectedContact, showEditor } = this.state;

		return (
			<div className="contacts">
				{showEditor ? (
					<Editor
						contact={selectedContact}
						save={this.saveContact.bind( this )}
						remove={this.deleteContact.bind( this )}
						close={this.toggleEditor.bind( this )}
					/>
				) : selectedContact ? (
					<Contact
						contact={selectedContact}
						blocked={this.isBlocked( selectedContact )}
						showEditor={this.toggleEditor.bind( this )}
						toggleBlacklist={this.toggleBlacklist.bind( this )}
						close={() => this.selectContact()}
					/>
				) : (
					<Fragment>
						<Navigation
							action={{ title: IoIosAdd, onClick: this.toggleEditor.bind( this ) }}
						/>

						<div className="header">
							<Title>Контакты</Title>

							<SearchInput
								placeholder="Поиск"
								value={this.state.searchValue}
								onChange={( value: string ) =>
									this.setState( () => ( { searchValue: value } ) )
								}
							/>
						</div>

						<List
							contacts={this.getFilteredItems()}
							selectContact={this.selectContact.bind( this )}
						/>
					</Fragment>
				)}
			</div>
		);
	}
}
