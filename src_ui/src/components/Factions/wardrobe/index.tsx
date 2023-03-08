import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import withRotation from 'components/Common/with-rotation';
import Selector from 'components/Common/selector';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Hint from 'components/Common/hint';
import Categories from './categories';

type Props = {} & RouteComponentProps;
type State = {
	activeCategory: string;
	items: number;
	currentItem: number;
	onDuty: boolean;
};

class FactionWardrobe extends Component<Props, State> {
	readonly state: State = {
		activeCategory: 'hat',
		items: 0,
		currentItem: 0,
		onDuty: false
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
		this.setCategory(this.state.activeCategory);
	}

	async setCategory(name: string) {
		const amount: number = await rpc.callClient('FactionWardrobe-ChangeType', name);

		this.setState(() => ({
			activeCategory: name,
			items: amount,
			currentItem: 0
		}));
	}

	async changeItem(index: number) {
		await this.setState(() => ({ currentItem: index }));

		await rpc.callClient('FactionWardrobe-ChangeItem', index);
	}

	async startWork() {
		await rpc.callServer('Factions-StartWork');
		this.setState(() => ({ onDuty: true }));
	}

	async finishWork() {
		if (!this.state.onDuty) return;

		await rpc.callServer('Factions-FinishWork');
		this.setState(() => ({ onDuty: false }));
	}

	render() {
		const { activeCategory, items, currentItem, onDuty } = this.state;

		return (
			<div className="faction-wardrobe">
				<Hint className="faction-wardrobe_hint" action="drag">
					Поворот персонажа
				</Hint>

				<div className="faction-wardrobe_container">
					<Categories
						current={activeCategory}
						setCategory={this.setCategory.bind(this)}
					/>

					<div className="faction-wardrobe_main">
						<Selector
							className="faction-wardrobe_selector"
							value={currentItem}
							items={[...Array(items).keys()]}
							onChange={this.changeItem.bind(this)}
						/>
					</div>
				</div>

				<div className="faction-wardrobe_buttons">
					{onDuty ? (
						<GradientButton color="purple" onClick={this.finishWork.bind(this)}>
							Закончить смену
						</GradientButton>
					) : (
						<GradientButton onClick={this.startWork.bind(this)}>
							Начать смену
						</GradientButton>
					)}

					<OutlineButton onClick={() => rpc.callClient('FactionWardrobe-CloseMenu')}>
						Закрыть
					</OutlineButton>
				</div>
			</div>
		);
	}
}

export default withRotation(FactionWardrobe);
