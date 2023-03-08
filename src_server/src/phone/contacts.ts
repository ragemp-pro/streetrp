import CharModel from 'models/Character';

type Contact = {
	phone: string;
	firstName: string;
	lastName: string;
};

class PhoneContacts {
	constructor() {
		this.subscribeToEvents();
	}

	isBlocked(player: Player, phoneNumber: string) {
		return player.phone.blacklist.includes(phoneNumber);
	}

	private getContact(player: Player, phoneNumber: string) {
		return player.phone.contacts.find(({ phone }) => phone === phoneNumber);
	}

	private async addContact(player: Player, data: Contact) {
		if (this.getContact(player, data.phone) || player.phone.contacts.length > 30) {
			throw new SilentError('contact with this number already exists');
		}

		await CharModel.findByIdAndUpdate(player.dbId, { $push: { 'phone.contacts': data } });

		player.phone.contacts.push(data);
	}

	private async editContact(player: Player, phoneNumber: string, data: Contact) {
		if (phoneNumber !== data.phone && this.getContact(player, data.phone)) {
			throw new SilentError('contact with this number already exists');
		}

		await CharModel.findOneAndUpdate(
			{ _id: player.dbId, 'phone.contacts.phone': phoneNumber },
			{ $set: { 'phone.contacts.$': data } }
		);

		player.phone.contacts = player.phone.contacts.map((item) =>
			item.phone === phoneNumber ? data : item
		);
	}

	private async deleteContact(player: Player, phoneNumber: string) {
		await CharModel.findByIdAndUpdate(player.dbId, {
			$pull: { 'phone.contacts': { phone: phoneNumber } }
		});

		player.phone.contacts = player.phone.contacts.filter(
			(item) => item.phone !== phoneNumber
		);
	}

	async blockContact(player: Player, phoneNumber: string) {
		if (this.isBlocked(player, phoneNumber)) {
			throw new SilentError('this phone is already blocked');
		}

		await CharModel.findByIdAndUpdate(player.dbId, {
			$push: { 'phone.blacklist': phoneNumber }
		});

		player.phone.blacklist.push(phoneNumber);
	}

	async unblockContact(player: Player, phoneNumber: string) {
		const index = player.phone.blacklist.indexOf(phoneNumber);

		if (index < 0) throw new SilentError("this phone isn't blocked");

		await CharModel.findByIdAndUpdate(player.dbId, {
			$pull: { 'phone.blacklist': phoneNumber }
		});

		player.phone.blacklist.splice(index, 1);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Phone-AddContact': this.addContact.bind(this),
			'Phone-EditContact': this.editContact.bind(this),
			'Phone-DeleteContact': this.deleteContact.bind(this),
			'Phone-BlockContact': this.blockContact.bind(this),
			'Phone-UnblockContact': this.unblockContact.bind(this),
			'Phone-GetContactByNumber': this.getContact.bind(this),
			'Phone-GetContactsData': (player) => {
				const { contacts, blacklist } = player.phone;

				return { contacts, blacklist };
			}
		});
	}
}

export default new PhoneContacts();
