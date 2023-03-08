import factions from 'factions';
import factionsApi from 'factions/api';
import { COMMANDS } from './commands';
import chat from './index';

class FactionChat {
	sendMessage(player: Player, message: string, command: COMMANDS) {
		const { position } = player.mp;

		const faction = factions.getFaction(player.faction);
		if (!faction) return;

		const rank = factionsApi.getPlayerRank(player);
		const text = message
			.replace('[faction]', faction.name.toUpperCase())
			.replace('[rank]', rank);

		switch (command) {
			case COMMANDS.FACTION:
			case COMMANDS.FACTION_NRP:
				if (!faction.government) return;

				chat.sendToFaction(faction, text);
				if (command === COMMANDS.FACTION) {
					chat.sendPlayerMessage(player, 'cказал что-то по рации', COMMANDS.ME);
				}
				break;

			case COMMANDS.ORG:
			case COMMANDS.ORG_NRP:
				if (faction.government) return;

				chat.sendToFaction(faction, text);
				if (command === COMMANDS.ORG) {
					chat.sendPlayerMessage(player, 'cказал что-то по рации', COMMANDS.ME);
				}
				break;

			case COMMANDS.NEWS:
				if (!faction.isLeader(player, true)) return;

				chat.sendToAll(text);
				break;
			case COMMANDS.DEPARTMENT:
				if (!faction.government) return;

				Object.values(factions.items).forEach(
					(item) => item.government && chat.sendToFaction(item, text)
				);
				break;
			case COMMANDS.MEGAFON:
				if (!faction.government) return;

				chat.sendNear(position, text, 120);
				break;

			default:
				break;
		}
	}
}

export default new FactionChat();
