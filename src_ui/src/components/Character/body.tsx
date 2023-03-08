import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Selector from './selector';
import Slider from './slider';

const genderList = {
	male: 'Мужской',
	female: 'Женский'
};
const names = {
	mother: [
		'Ханна',
		'Ави',
		'Джасмин',
		'Гизель',
		'Амелия',
		'Изабелла',
		'Зоя',
		'Ава',
		'Камила',
		'Виолета',
		'София',
		'Эвелин',
		'Никола',
		'Эшли',
		'Грэйс',
		'Брианна',
		'Наталья',
		'Оливия',
		'Элизабет',
		'Шарлотта',
		'Эмма',
		'Мисти'
	],
	father: [
		'Бенджамин',
		'Даниил',
		'Джошуа',
		'Ноа',
		'Эндрю',
		'Хуан',
		'Алекс',
		'Исаак',
		'Эван',
		'Этан',
		'Винцент',
		'Энджел',
		'Диего',
		'Адриан',
		'Виктор',
		'Максим',
		'Сантиаго',
		'Кевин',
		'Андрей',
		'Самуэль',
		'Антони',
		'Клауд',
		'Нико',
		'Джон'
	]
};

const parents = {
	father: [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		42,
		43,
		44
	],
	mother: [
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		40,
		41,
		45
	]
};

type State = {
	gender: 'male' | 'female';
	father: number;
	mother: number;
	similarity: number;
	skin: number;
};

export default class CharacterBody extends Component<{}, State> {
	readonly state: State = {
		gender: 'male',
		mother: 0,
		father: 0,
		similarity: 0.5,
		skin: 6
	};

	componentDidMount() {
		this.getSavedState();
	}

	async getSavedState() {
		const { gender, skindata } = await rpc.callClient('CharCreator-GetState');

		this.setState(() => ({
			gender,
			mother: parents.mother.indexOf(skindata[0]),
			father: parents.father.indexOf(skindata[1]),
			similarity: skindata[2],
			skin: skindata[3]
		}));
	}

	changeAppearance() {
		const { mother, father, similarity, skin } = this.state;

		rpc.callClient('Character-UpdateParents', [
			parents.mother[mother],
			parents.father[father],
			similarity,
			skin
		]);
	}

	async switchParent(parent: 'mother' | 'father', value: string) {
		await this.setState(() => ({ [parent]: names[parent].indexOf(value) } as any));

		this.changeAppearance();
	}

	async changeSkin(name: 'similarity' | 'skin', value: number) {
		await this.setState((state) => ({ ...state, [name]: value }));

		this.changeAppearance();
	}

	async toggleGender(value: string) {
		await rpc.callClient('Character-ChangeGender', value);
		await this.getSavedState();
	}

	render() {
		const { gender, father, mother, similarity, skin } = this.state;

		return (
			<div className="character_item character_item--body">
				<Selector
					title="Пол"
					items={Object.keys(genderList)}
					value={gender}
					customValue={genderList[gender]}
					onChange={this.toggleGender.bind(this)}
				/>

				<Selector
					title="Мать"
					value={names.mother[mother]}
					items={names.mother}
					onChange={this.switchParent.bind(this, 'mother')}
				/>
				<Selector
					title="Отец"
					value={names.father[father]}
					items={names.father}
					onChange={this.switchParent.bind(this, 'father')}
				/>

				<Slider
					title="Схожесть"
					value={similarity}
					min={0}
					max={1}
					step={0.1}
					onChange={(value) => this.changeSkin('similarity', value)}
				/>
				<Slider
					title="Цвет кожи"
					value={skin}
					min={0}
					max={12}
					onChange={(value) => this.changeSkin('skin', value)}
				/>
			</div>
		);
	}
}
