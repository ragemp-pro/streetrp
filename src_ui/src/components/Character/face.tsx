import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Slider from './slider';
import Options from './options';

const options: { [name: string]: string } = {
	nose: 'Нос',
	brows: 'Брови',
	cheeks: 'Щеки',
	eyes: 'Глаза',
	lips: 'Губы',
	jaw: 'Челюсть',
	chin: 'Подбородок'
};

const items: { [name: string]: string[] } = {
	nose: [
		'Ширина носа',
		'Высота носа',
		'Длина кончика носа',
		'Глубина моста носа',
		'Высота кончика носа',
		'Смещение носа'
	],
	brows: ['Высота бровей', 'Ширина бровей'],
	cheeks: ['Высота скул', 'Ширина скул', 'Ширина щек'],
	eyes: ['Размер глаз'],
	lips: ['Толщина губ'],
	jaw: ['Ширина челюсти', 'Форма челюсти'],
	chin: [
		'Высота подбородка',
		'Глубина подбородка',
		'Ширина подбородка',
		'Толщина подбородка',
		'Толщина шеи'
	]
};

type State = {
	activeOption: string;
	facedata: number[];
};

export default class CharacterFace extends Component<{}, State> {
	readonly state: State = {
		activeOption: 'nose',
		facedata: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	};

	componentDidMount() {
		rpc.callClient('CharCreator-GetState').then((data) => {
			this.setState(() => ({ facedata: data.facedata }));
		});
	}

	async changeFaceData(prop: number, value: number) {
		await this.setState((state) => ({
			facedata: state.facedata.map((item, index) => (prop === index ? value : item))
		}));

		rpc.callClient('Character-UpdateFaceOptions', [prop, value]);
	}

	selectOption(name: string) {
		this.setState(() => ({ activeOption: name }));
	}

	getStartIndex(option: string) {
		let index = 0;

		Object.entries(items).every(([name, list]) => {
			if (option === name) return false;

			index += list.length;

			return true;
		});

		return index;
	}

	render() {
		const { activeOption, facedata } = this.state;
		const startIndex = this.getStartIndex(activeOption);

		return (
			<div className="character_item character_item--face">
				{items[activeOption].map((item, index) => (
					<Slider
						key={item}
						title={item}
						value={facedata[startIndex + index]}
						step={0.1}
						min={-1}
						max={1.0}
						onChange={(value) => this.changeFaceData(startIndex + index, value)}
					/>
				))}

				<Options
					items={options}
					selected={activeOption}
					select={this.selectOption.bind(this)}
				/>
			</div>
		);
	}
}
