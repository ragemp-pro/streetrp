import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Selector from 'components/Common/selector';
import Options from './options';

const options: { [name: string]: string } = {
	shirts: 'Футболка',
	pants: 'Брюки',
	shoes: 'Обувь'
};

type State = {
	activeOption: string;

	pants: number;
	shoes: number;
	shirts: number;
};

export default class Clothes extends Component<{}, State> {
	readonly state: State = {
		activeOption: 'shirts',

		shirts: 0,
		pants: 0,
		shoes: 0
	};

	componentDidMount() {
		rpc
			.callClient('CharCreator-GetState')
			.then(({ shirts, pants, shoes }: State) =>
				this.setState(() => ({ shirts, pants, shoes }))
			);
	}

	selectOption(name: string) {
		this.setState(() => ({ activeOption: name }));
	}

	setClothes() {
		const { activeOption } = this.state;

		rpc.callClient('Character-SetClothes', [
			this.state.activeOption,
			(this.state as any)[activeOption]
		]);
	}

	async switchOption(option: string, value: number) {
		await this.setState(() => ({ [option]: value } as any));

		this.setClothes();
	}

	render() {
		const { activeOption } = this.state;

		return (
			<div className="character_item character_item--appearance">
				<Selector
					className="character_selector"
					circleButton
					title={options[activeOption]}
					items={[...Array(4).keys()]}
					value={(this.state as any)[activeOption]}
					onChange={this.switchOption.bind(this, activeOption)}
				/>

				<Options
					items={options}
					selected={activeOption}
					select={this.selectOption.bind(this)}
				/>
			</div>
		);
	}
}
