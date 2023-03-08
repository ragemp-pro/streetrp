import { isNumber } from 'lodash';
import playerTarget from 'player/target';

const player = mp.players.local;

const items: { [faction: string]: string[] } = {
	lspd: [
		'invite',
		'docs',
		'cuff',
		'uncuff',
		'untie',
		'follow',
		'unfollow',
		'frisk',
		'unmask',
		'vehicle',
		'headsack_disable'
	],
	ems: ['invite', 'docs', 'heal', 'reanimate', 'medcard_physical', 'medcard_mental'],
	sang: [
		'invite',
		'docs',
		'cuff',
		'uncuff',
		'untie',
		'follow',
		'unfollow',
		'unmask',
		'vehicle',
		'headsack_disable',
		'military_id'
	],
	armenian: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	],
	families: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	],
	ballas: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	],
	vagos: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	],
	bloods: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	],
	marabunta: [
		'invite',
		'tie',
		'untie',
		'follow',
		'unfollow',
		'headsack_enable',
		'headsack_disable',
		'vehicle'
	]
};

class FactionActions {
	constructor() {
		mp.events.subscribe({
			'FactionActions-GetItems': this.getAvailable.bind(this),
			'FactionActions-Call': this.callAction.bind(this)
		});
	}

	private callAction(action: string) {
		const target = playerTarget.target as PlayerMp;
		if (!mp.players.exists(target)) return;

		switch (action) {
			case 'invite':
				mp.events.callServer('FactionLeader-Invite', null, false);
				break;
			case 'docs':
				mp.events.callServer('Player-OfferDocs', 'faction', false);
				break;
			case 'cuff':
				mp.events.callServer('CuffsActions-UseHandcuffs', null, false);
				break;
			case 'uncuff':
				mp.events.callServer('CuffsActions-Uncuff', null, false);
				break;
			case 'tie':
				mp.events.callServer('CuffsActions-UseCableTie', null, false);
				break;
			case 'untie':
				mp.events.callServer('CuffsActions-Untie', null, false);
				break;
			case 'unmask':
				mp.events.callServer('FactionActions-Unmask', null, false);
				break;
			case 'follow':
				mp.events.callServer('FollowActions-Start', null, false);
				break;
			case 'unfollow':
				mp.events.callServer('FollowActions-Stop', null, false);
				break;
			case 'frisk':
				mp.events.callServer('FactionActions-Frisk', null, false);
				break;
			case 'vehicle':
				mp.events.callServer('FactionActions-ToVehicle', null, false);
				break;
			case 'headsack_enable':
				mp.events.callServer('BagActions-PutOn', null, false);
				break;
			case 'headsack_disable':
				mp.events.callServer('BagActions-TakeOff', null, false);
				break;
			case 'heal':
				mp.events.callServer('EmsHealth-OfferHeal', null, false);
				break;
			case 'reanimate':
				mp.events.callServer('EmsHealth-Reanimate', null, false);
				break;
			case 'medcard_physical':
				mp.events.callServer('EmsLicenses-OfferLicense', 'physical', false);
				break;
			case 'medcard_mental':
				mp.events.callServer('EmsLicenses-OfferLicense', 'mental', false);
				break;
			case 'military_id':
				mp.events.callServer('ArmyTicket-Give', null, false);
				break;

			default:
				break;
		}

		playerTarget.toggleMenu();
	}

	private getAvailable() {
		const faction = player.getVariable('faction');
		const actions = items[faction] ?? [];

		return actions.filter((item) => this.isAvailable(item));
	}

	private isAvailable(action: string) {
		const target = playerTarget.target as PlayerMp;
		if (!mp.players.exists(target)) return false;

		switch (action) {
			case 'unmask':
				return target.getVariable('inMask');
			case 'cuff':
				return !target.getVariable('cuffs');
			case 'uncuff':
				return target.getVariable('cuffs') === 'handcuffs';
			case 'tie':
				return !target.getVariable('cuffs');
			case 'untie':
				return target.getVariable('cuffs') === 'tie';
			case 'follow':
				return target.getVariable('cuffs') && !isNumber(target.getVariable('follow'));
			case 'unfollow':
				return isNumber(target.getVariable('follow'));
			case 'reanimate':
				return target.getVariable('isDying');
			case 'heal':
				return target.getHealth() < 90;
			case 'headsack_enable':
				return !target.getVariable('headsack');
			case 'headsack_disable':
				return target.getVariable('headsack');
			case 'military_id':
				return target.getVariable('faction') === 'sang';

			default:
				return true;
		}
	}
}

const factionActions = new FactionActions();
