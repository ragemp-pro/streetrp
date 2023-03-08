import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Options from '../options';
import Selector from '../selector';
import Hair from './hair';
import Face from './face';
import Makeup from './makeup';
import Item from './item';

const options: { [name: string]: string } = {
	lenses: 'Линзы',
	brows: 'Брови',
	hair: 'Прическа',
	face: 'Лицо'
};

const maleOptions = { ...options, beard: 'Борода' };
const femaleOptions = { ...options, makeup: 'Макияж' };

type State = {
	activeOption: string;

	gender: 'male' | 'female';
	eyeColor: number;
	hair: {
		style: number;
		color: number;
		highlight: number;
	};
	headOverlay: [number, number][];
};

export default class Appearance extends Component<{}, State> {
	readonly state: State = {
		activeOption: 'hair',

		gender: 'male',
		hair: {
			style: 0,
			color: 0,
			highlight: 0
		},
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
		eyeColor: 0
	};

	componentDidMount() {
		rpc
			.callClient('CharCreator-GetState')
			.then(({ gender, hair, headOverlay, eyeColor }: Omit<State, 'activeOption'>) =>
				this.setState(() => ({ gender, hair, headOverlay, eyeColor }))
			);
	}

	selectOption(name: string) {
		this.setState(() => ({ activeOption: name }));
	}

	getOptionComponent() {
		const { activeOption, hair, eyeColor, headOverlay } = this.state;

		switch (activeOption) {
			case 'hair':
				return (
					<Hair
						style={hair.style}
						color={hair.color}
						highlight={hair.highlight}
						update={this.setHair.bind(this)}
					/>
				);
			case 'face':
				return <Face values={headOverlay} update={this.changeHeadOverlay.bind(this)} />;
			case 'beard':
				return (
					<Item
						style={headOverlay[1][0]}
						color={headOverlay[1][1]}
						styles={28}
						update={this.changeHeadOverlay.bind(this, 1)}
					/>
				);
			case 'brows':
				return (
					<Item
						style={headOverlay[2][0]}
						color={headOverlay[2][1]}
						styles={33}
						update={this.changeHeadOverlay.bind(this, 2)}
					/>
				);
			case 'makeup':
				return <Makeup values={headOverlay} update={this.changeHeadOverlay.bind(this)} />;

			default:
				return (
					<Selector
						title="Цвет"
						items={[...Array(31).keys()]}
						value={eyeColor}
						onChange={this.setEyeColor.bind(this)}
					/>
				);
		}
	}

	async changeHeadOverlay(id: number, value: number, color = 0) {
		await this.setState((state) => ({
			headOverlay: state.headOverlay.map((item, index) =>
				id === index ? [value, color] : item
			)
		}));

		await rpc.callClient('Character-UpdateHeadOverlay', [id, value, color]);
	}

	async setEyeColor(color: number) {
		await this.setState(() => ({ eyeColor: color }));

		await rpc.callClient('Character-SetEyeColor', color);
	}

	async setHair(prop: string, value: number) {
		await this.setState((state) => ({ hair: { ...state.hair, [prop]: value } }));

		const { style, color, highlight } = this.state.hair;

		await rpc.callClient('Character-UpdateHair', [style, color, highlight]);
	}

	render() {
		const { activeOption, gender } = this.state;

		return (
			<div className="character_item character_item--appearance">
				{this.getOptionComponent()}

				<Options
					items={gender === 'male' ? maleOptions : femaleOptions}
					selected={activeOption}
					select={this.selectOption.bind(this)}
				/>
			</div>
		);
	}
}
