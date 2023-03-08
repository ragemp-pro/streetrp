const localPlayer = mp.players.local;

class PlayerFriends {
	constructor() {
		mp.events.subscribe({
			'PlayerFriends-IsFriend': this.isFriend,
			'PlayerFriends-Add': this.addFriend,
			'PlayerFriends-PrepareString': this.prepareString.bind(this)
		});
	}

	isFriend(player: PlayerMp) {
		return (
			localPlayer === player ||
			mp.storage.data.friends.includes(player.getVariable('uid'))
		);
	}

	addFriend(uid: number) {
		mp.storage.update({ friends: [...mp.storage.data.friends, uid] });
	}

	private prepareString(str: string) {
		const regexp = /\[(.?\d+)\]/gm;

		return str.replace(regexp, (match) => {
			const id = parseInt(match.replace(/[^\d]+/g, ''), 10);
			const player = mp.players.atRemoteId(id);

			if (!mp.players.exists(player) || !this.isFriend(player)) return `Гражданин(${id})`;
			return `${player.name.replace('_', ' ')}(${id})`;
		});
	}
}

export default new PlayerFriends();
