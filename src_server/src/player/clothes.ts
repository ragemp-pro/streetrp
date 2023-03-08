import { isNumber } from 'lodash';
import hud from 'helpers/hud';
import empty from 'data/clothes/empty.json';
import torsos from 'data/clothes/torsos.json';
import undershirts from 'data/clothes/undershirts.json';
import tops from 'data/clothes/tops.json';

type ClothesItem = {
	style: number;
	color: number;
	gender?: 'male' | 'female';
};

const components = {
	mask: 1,
	torso: 3,
	pants: 4,
	bag: 5,
	shoes: 6,
	accessories: 7,
	undershirt: 8,
	armor: 9,
	decals: 10,
	jacket: 11,
	shirt: 11
};
const props = {
	hat: 0,
	glasses: 1,
	ears: 2,
	watch: 6,
	bracelet: 7
};

export type ClothesName = keyof typeof components | keyof typeof props;

class Clothes {
	set = (player: Player, name: ClothesName, item: ClothesItem) => {
		const { mp } = player;
		const { style, color, gender } = item;

		if (gender && player.gender !== gender) {
			hud.showNotification(
				player,
				'error',
				'Данная одежда несовместима с вашим полом',
				true
			);

			throw new SilentError('wrong clothes');
		}

		switch (name) {
			case 'mask':
				return this.setMask(player, item);

			case 'jacket':
				return this.setJacket(player, item);

			case 'shirt':
				return this.setShirt(player, item);

			default: {
				if (this.isComponent(name)) mp.setClothes(components[name], style, color, 2);
				else mp.setProp(props[name], style, color);
			}
		}
	};

	hide(player: Player, name: ClothesName) {
		const { gender } = player;

		this.set(player, name, {
			style: this.isComponent(name) ? empty[gender][components[name]] : 255,
			color: 0,
			gender
		});
	}

	load(player: Player) {
		this.clear(player);

		Object.values(player.equipment).forEach((item) => {
			if (item.data?.style >= 0) this.set(player, item.name as any, item.data as any);
		});
	}

	clear(player: Player) {
		Object.keys(props).forEach((item) => this.hide(player, item as any));
		Object.keys(components).forEach((item) => this.hide(player, item as any));
	}

	private isComponent(name: string) {
		return typeof components[name] === 'number';
	}

	private getComponentData(player: PlayerMp, name: keyof typeof components) {
		return (components[name] === 11
			? player.getVariable(name) ?? player.getClothes(components[name])
			: player.getClothes(components[name])) as ReturnType<typeof player.getClothes>;
	}

	private isEmpty(player: Player, component: keyof typeof components, style: number) {
		const { gender } = player;
		const id = components[component];

		return empty[gender][id] === style;
	}

	private setJacket(player: Player, data: ClothesItem) {
		const { mp } = player;
		const top = this.getComponentData(mp, 'shirt');

		this.setClientClothes(mp, 'jacket', data);
		this.setShirt(player, { style: top.drawable, color: top.texture });
	}

	private setShirt(player: Player, data: ClothesItem) {
		const { mp, gender } = player;
		let { drawable: top } = this.getComponentData(mp, 'jacket');

		// not sync, only data storage
		this.setClientClothes(player.mp, 'shirt', data);

		if (!isNumber(tops[gender][top])) {
			top = data.style;

			this.setClientClothes(player.mp, 'jacket', data);
		}

		this.setUndershirt(player, top, data);
		this.applyCorrectTorso(player, top);
	}

	private setUndershirt(player: Player, top: number, { style, color }: ClothesItem) {
		const { mp, gender } = player;

		const type: number = tops[gender][top];
		const drawable: number = undershirts[gender][style]?.[type] ?? empty[gender][8];

		mp.setClothes(8, drawable, color, 2);
	}

	private applyCorrectTorso(player: Player, top: number) {
		const { mp, gender } = player;

		const torso: number = torsos[gender][top] ?? empty[gender][3];

		mp.setClothes(3, torso, 0, 2);
	}

	private setMask(player: Player, data: ClothesItem) {
		const { mp } = player;

		mp.setClothes(1, data.style, data.color, 2);
		mp.setVariable('inMask', !this.isEmpty(player, 'mask', data.style));
	}

	private setClientClothes(player: PlayerMp, name: string, data: ClothesItem) {
		const { style: drawable, color: texture } = data;

		player.setVariable(name, { drawable, texture });
	}
}

export default new Clothes();
