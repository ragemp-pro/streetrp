import React, { Component } from 'react';
import rpc from 'utils/rpc';
import withRotation from 'components/Common/with-rotation';
import GradientButton from 'components/Common/gradient-button';
import Hint from 'components/Common/hint';
import Page from './page';
import Body from './body';
import Face from './face';
import Appearance from './appearance';
import Clothes from './clothes';

type State = {
	activePage: string;
};

const pages: { [name: string]: string } = {
	body: 'Персонаж',
	face: 'Черты лица',
	appearance: 'Внешность',
	clothes: 'Одежда'
};

class Character extends Component<{}, State> {
	readonly state: State = {
		activePage: 'body'
	};

	openPage(name: string) {
		rpc.callClient('CharCreator-ChangeCamera', name);

		this.setState(() => ({ activePage: name }));
	}

	getPageComponent() {
		const { activePage } = this.state;

		switch (activePage) {
			case 'body':
				return <Body />;

			case 'face':
				return <Face />;

			case 'clothes':
				return <Clothes />;

			default:
				return <Appearance />;
		}
	}

	switchPage(increase: boolean) {
		const items = Object.keys(pages);
		const pageIndex = items.indexOf(this.state.activePage);

		if (increase && pageIndex === items.length - 1) return this.create();

		this.openPage(increase ? items[pageIndex + 1] : items[pageIndex - 1]);
	}

	create() {
		rpc.callClient('CharCreator-Submit');
	}

	render() {
		const { activePage } = this.state;

		return (
			<div className="character">
				<Page items={pages} current={activePage} open={this.openPage.bind(this)} />

				<div className="character_container">
					<button
						className="character_btn"
						disabled={Object.keys(pages)[0] === activePage}
						onClick={this.switchPage.bind(this, false)}
					>
						Назад
					</button>

					{this.getPageComponent()}

					<GradientButton onClick={this.switchPage.bind(this, true)}>
						Далее
					</GradientButton>
				</div>

				<Hint className="character_hint" action="drag">
					Поворот персонажа
				</Hint>
			</div>
		);
	}
}

export default withRotation(Character);
