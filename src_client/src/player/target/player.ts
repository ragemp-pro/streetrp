import playerCtrl from 'player';
import { Action } from './index';

class PlayerTarget {
	callAction(target: PlayerMp, action: Action) {
		if (target?.type !== 'player' || target.getVariable('isDying')) return;

		const { group, id } = action;

		switch (group) {
			case 'docs':
				mp.events.callServer('Player-OfferDocs', id, false);
				break;
			case 'property':
				if (id === 'vehicle') mp.events.callServer('VehicleTrade-ShowMenu');
				else if (id === 'house') mp.events.callServer('HouseTrade-ShowMenu');
				else if (id === 'business') mp.events.callServer('BusinessTrade-ShowMenu');
				break;

			default:
				if (id === 'money') {
					mp.events.callBrowser(
						'Player-ShowCashMenu',
						playerCtrl.getName(target as PlayerMp)
					);
				} else if (id === 'handshake' && !target.getVariable('cuffs'))
					mp.events.callServer('Player-FriendOffer', null, false);
				break;
		}
	}
}

export default new PlayerTarget();
