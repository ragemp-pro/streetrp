import React from 'react';
import { ContactData } from './index';

type Props = {
	selectContact: (contact: ContactData) => void;
	contacts: ContactData[];
};

export default function ContactsList({ contacts, selectContact }: Props) {
	const letterExisting = (prev: ContactData, next: ContactData) => {
		return prev.firstName[0].toLowerCase() === next.firstName[0].toLowerCase();
	};

	return (
		<div className="contacts_list">
			<ul>
				{contacts.map((contact, index) => (
					<li key={index} onClick={() => selectContact(contact)}>
						{(index === 0 || !letterExisting(contacts[index - 1], contact)) && (
							<h3 className="letter">{contact.firstName[0].toUpperCase()}</h3>
						)}

						<p className="name">
							<b>{contact.firstName}</b> {contact.lastName}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
