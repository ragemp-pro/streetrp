import { merge } from 'lodash';
import startCutscene from 'basic/cutscene';

const player = mp.players.local;

const initialState = {
	gender: 'male',
	skindata: [21, 0, 0.5, 6],
	facedata: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	headOverlay: [
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0],
		[-1, 0]
	],
	hair: {
		style: 0,
		color: 0,
		highlight: 0
	},
	eyeColor: 0,

	shirts: 0,
	pants: 0,
	shoes: 0,

	tattoos: []
};

const clothes = {
	male: {
		shirts: [13, 16, 33, 44],
		pants: [75, 1, 3, 6],
		shoes: [1, 4, 42, 6]
	},
	female: {
		shirts: [23, 27, 14, 80],
		pants: [4, 8, 25, 27],
		shoes: [1, 0, 3, 5]
	}
};
const wrongHairs = {
	male: 23,
	female: 24
};

type State = typeof initialState;

class CharacterCreator {
	private state: State;

	constructor() {
		this.reset();

		mp.events.subscribe({
			'CharCreator-GetState': () => this.state,
			'CharCreator-ChangeCamera': this.changeCamera.bind(this),
			'CharCreator-ShowMenu': this.showCreator.bind(this),
			'CharCreator-Submit': this.create.bind(this),

			'Character-UpdateParents': this.updateParents.bind(this),
			'Character-ChangeGender': this.changeGender.bind(this),
			'Character-UpdateFaceOptions': this.updateFace.bind(this),
			'Character-UpdateHeadOverlay': this.updateHeadOverlay.bind(this),
			'Character-UpdateHair': this.updateHair.bind(this),
			'Character-SetEyeColor': this.setEyeColor.bind(this),
			'Character-SetClothes': this.setClothes.bind(this)
		});
	}

	get appearance() {
		return this.state;
	}

	reset(data?: Partial<State>) {
		this.state = merge({}, initialState, data);
	}

	private updateParents(
		mother: number,
		father: number,
		similarity: number,
		skin: number
	) {
		this.state.skindata = [mother, father, similarity, skin];

		player.setHeadBlendData(
			mother,
			father,
			0,
			mother,
			father,
			0,
			similarity,
			skin,
			0,
			true
		);
	}

	private changeGender(gender: string) {
		this.reset({ gender });

		player.model = mp.game.joaat(
			gender === 'female' ? 'mp_f_freemode_01' : 'mp_m_freemode_01'
		);
		player.setComponentVariation(8, 15, 0, 0);
		player.setComponentVariation(3, 0, 0, 0);

		Object.keys(clothes[gender]).forEach((type) => this.setClothes(type, 0));
	}

	private updateFace(index: number, scale: number) {
		this.state.facedata[index] = scale;

		player.setFaceFeature(index, scale);
	}

	private updateHeadOverlay(id: number, style: number, color = 0) {
		this.state.headOverlay[id] = [style, color];

		player.setHeadOverlay(id, style === -1 ? 255 : style, 1.0, color, color);
	}

	private updateHair(style: number, color: number, highlight: number) {
		if (wrongHairs[this.state.gender] === style) return;

		this.state.hair = {
			style,
			color,
			highlight
		};

		player.setComponentVariation(2, style, 0, 0);
		player.setHairColor(color, highlight);
	}

	private setEyeColor(color: number) {
		this.state.eyeColor = color;

		player.setEyeColor(color);
	}

	private setClothes(type: string, index: number) {
		this.state[type] = index;

		switch (type) {
			case 'shirts':
				player.setComponentVariation(11, this.getStyleOfClothes('shirts'), 0, 0);
				break;

			case 'pants':
				player.setComponentVariation(4, this.getStyleOfClothes('pants'), 0, 0);
				break;

			case 'shoes':
				player.setComponentVariation(6, this.getStyleOfClothes('shoes'), 0, 0);
				break;

			default:
				break;
		}
	}

	private getStyleOfClothes(name: keyof typeof clothes['male']) {
		return clothes[this.state.gender][name][this.state[name]] as number;
	}

	private async create() {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { shirts, pants, shoes, ...data } = this.state;

		await mp.events.callServer('Character-Create', [
			data,
			{
				shirt: this.getStyleOfClothes('shirts'),
				pants: this.getStyleOfClothes('pants'),
				shoes: this.getStyleOfClothes('shoes')
			}
		]);

		mp.cameras.reset();
		mp.browsers.hidePage();
		this.reset();

		startCutscene.play(data.gender as any);
	}

	private changeCamera(type: string) {
		if (type === 'clothes') {
			mp.cameras.set(
				new mp.Vector3(-814.0785, 173.6837, 76.765),
				new mp.Vector3(0.0, 0.0, -60.0),
				new mp.Vector3(-814.0785, 173.6837, 76.765),
				45
			);
		} else {
			mp.cameras.set(
				new mp.Vector3(-812.8785, 174.3837, 77.265),
				new mp.Vector3(0.0, 0.0, -57.0),
				new mp.Vector3(-812.8785, 174.3837, 77.265),
				45
			);
		}
	}

	private showCreator() {
		mp.game.interior.enableInteriorProp(166657, 'V_Michael_M_items');
		mp.game.interior.refreshInterior(166657);

		this.changeCamera('default');
		this.changeGender('male');

		mp.browsers.showPage('character', null, true, true);
	}
}

export default new CharacterCreator();
