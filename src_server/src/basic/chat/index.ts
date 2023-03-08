import Faction from 'factions/faction';
import chatCommands, { COMMANDS, colors } from './commands';
import factionChat from './faction';

class Chat {
	public colors = colors;

	constructor() {
		mp.events.subscribeToDefault({
			playerChat: (player: Player, data: string) => {
				try {
					const { mode, text } = JSON.parse(data);
					this.sendPlayerMessage(player, text, mode);
				} catch (err) {
					console.log(err, data, 'chat error');
				}
			}
		});
	}

	sendSystem(message: string, color = 'b80614') {
		this.sendToAll(`!{${color}}${message}`);
	}

	sendPlayerMessage(player: Player, message: string, command: COMMANDS) {
		const { position } = player.mp;
		const text = chatCommands.prepareString(chatCommands.getTemplate(message, command), [
			player
		]);

		switch (command) {
			case COMMANDS.SCREAM:
				this.sendNear(position, text, 30);
				break;
			case COMMANDS.WHISPER: {
				const [id] = message.split(' ');
				const target = mp.players.at(parseInt(id, 10));
				if (!player.entityIsNearby(target)) return;

				this.sendToPlayer(target, text);
				break;
			}
			default:
				if (chatCommands.isFactionCommand(command)) {
					factionChat.sendMessage(player, text, command);
				} else this.sendNear(position, text);
				break;
		}
	}

	sendToAll(message: string) {
		mp.players.broadcast(message);
	}

	sendNear(position: Vector3Mp, message: string, range = 10) {
		mp.players.broadcastInRange(position, range, message);
	}

	sendToPlayer(player: PlayerMp, message: string) {
		player.outputChatBox(message);
	}

	sendToFaction(faction: Faction, message: string) {
		faction.getPlayers().forEach((player) => {
			this.sendToPlayer(player.mp, message);
		});
	}
}

export { COMMANDS };

export default new Chat();
