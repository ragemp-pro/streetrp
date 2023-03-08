import Main from './main';
import Keypad from './keypad';
import Contacts from './contacts';
import Settings from './settings';
import Maps from './maps';
import Sim from './sim';
import Vehicles from './vehicles';
import Referral from './referral';
import Support from './support';
import Donation from './donation';

export type PhoneApp = {
	name: string;
	component: any;
	attached?: boolean;
};

const apps: { [key: string]: PhoneApp } = {
	maps: {
		name: 'Карты',
		component: Maps
	},
	sim: {
		name: 'Racoon',
		component: Sim
	},
	referral: {
		name: 'Referral',
		component: Referral
	},
	vehicles: {
		name: 'Транспорт',
		component: Vehicles
	},
	donation: {
		name: 'Магазин',
		component: Donation
	},
	support: {
		name: 'Поддержка',
		component: Support
	},

	calls: {
		name: 'Звонки',
		component: Keypad,
		attached: true
	},
	contacts: {
		name: 'Контакты',
		component: Contacts,
		attached: true
	},
	messages: {
		name: 'Сообщения',
		component: Main,
		attached: true
	},
	settings: {
		name: 'Настройки',
		component: Settings,
		attached: true
	}
};

export default apps;
