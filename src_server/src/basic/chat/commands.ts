import { random } from 'lodash';

export enum COMMANDS {
	SAY = 0,
	NRP = 1,
	ME = 2,
	DO = 3,
	TRY = 4,
	TODO = 5,
	SCREAM = 6,
	WHISPER = 7,
	FACTION = 8,
	FACTION_NRP = 9,
	ORG = 10,
	ORG_NRP = 11,
	NEWS = 12,
	DEPARTMENT = 13,
	MEGAFON = 14
}

export const colors = {
	white: 'FFFFFF',
	lilac: 'b077d9',
	green: '1ED65F',
	yellow: 'EEEE04',
	orange: 'FF7600',
	blue: '0880cf'
};

class ChatCommands {
	isFactionCommand(id: number) {
		return id > 7;
	}

	prepareString(str: string, players: Player[]) {
		let prepared = str;

		players.forEach((player) => {
			const { id } = player.mp;
			prepared = str
				.replace('[id]', `[${id}]`)
				.replace('[name]', `${player.getName()}(${id})`);
		});

		return prepared;
	}

	getTemplate(text: string, command: number) {
		switch (command) {
			case COMMANDS.SAY:
				return `!{${colors.white}}[id] говорит: ${text}`;
			case COMMANDS.ME:
				return `!{${colors.lilac}}[id] ${text}`;
			case COMMANDS.DO:
				return `!{${colors.lilac}}${text} ([id])`;
			case COMMANDS.TRY:
				return `!{${colors.lilac}}[id] ${text} (${random(0, 1) ? 'Удачно' : 'Неудачно'})`;
			case COMMANDS.NRP:
				return `!{${colors.white}}[id]: (( ${text} ))`;
			case COMMANDS.SCREAM:
				return `!{${colors.white}}[id] крикнул: ${text}`;
			case COMMANDS.WHISPER: {
				const [, ...msg] = text.split(' ');
				return `!{${colors.white}}[id] сказал шепотом: ${msg.join(' ')}`;
			}
			case COMMANDS.TODO: {
				const [msg, action] = text.split('*');
				return `${msg}, !{${colors.lilac}} - сказал(а) [id], ${action}`;
			}

			case COMMANDS.NEWS:
				return `!{${colors.green}}${text}`;
			case COMMANDS.DEPARTMENT:
				return `!{${colors.orange}}[D][[faction]] [rank] [name]: ${text}`;
			case COMMANDS.MEGAFON:
				return `!{${colors.yellow}}[Мегафон] [rank] [name]: ${text}`;
			case COMMANDS.FACTION:
				return `!{${colors.blue}}[Фракция] [rank] [name]: ${text}`;
			case COMMANDS.FACTION_NRP:
				return `!{${colors.blue}}[Фракция] [rank] [name]: (( ${text} ))`;
			case COMMANDS.ORG:
				return `!{${colors.blue}}[Организация] [rank] [name]: ${text}`;
			case COMMANDS.ORG_NRP:
				return `!{${colors.blue}}[Организация] [rank] [name]: (( ${text} ))`;

			default:
				return `!{${colors.white}}[id]: ${text}`;
		}
	}
}

export default new ChatCommands();
