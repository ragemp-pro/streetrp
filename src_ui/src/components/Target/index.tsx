import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { isArray } from 'lodash';
import rpc from 'utils/rpc';
import { sections, groups } from './data';
import Cell from './cell';
import Passengers from './passengers';
import Organization from './organization';
import Animations from './anims';

type State = {
	type?: 'self' | 'player' | 'vehicle';
	group?: string;
};

export default class Target extends Component<{}, State> {
	list = React.createRef<HTMLUListElement>();

	animInterval?: NodeJS.Timeout;

	readonly state: State = {};

	componentDidMount() {
		rpc.register('Target-ShowMenu', this.setType.bind(this));
		rpc.register('Target-Reset', this.reset.bind(this));

		this.animateItems();
	}

	componentDidUpdate(prevProps: {}, prevState: State) {
		const { type, group } = this.state;

		if (type !== prevState.type || group !== prevState.group) {
			this.animateItems();
		}
	}

	componentWillUnmount() {
		if (this.state.type) rpc.callClient('Target-CloseMenu');

		rpc.unregister('Target-ShowMenu');
		rpc.unregister('Target-Reset');
	}

	setType(type?: State['type']) {
		this.setState(() => ({ type }));
	}

	reset() {
		this.setState(() => ({ type: undefined, group: undefined }));
	}

	toPrev() {
		if (!this.state.group) rpc.callClient('Target-CloseMenu');
		else this.setState(() => ({ group: undefined }));
	}

	animateItems() {
		this.animInterval = setInterval(() => {
			if (!this.list.current) return;

			const cell = Array.from(this.list.current.children).find((item) =>
				item.classList.contains('disabled')
			);

			if (cell) cell.classList.remove('disabled');
			else if (this.animInterval) clearInterval(this.animInterval);
		}, 100);
	}

	async onCellClick(id: string) {
		const { type, group } = this.state;

		if (groups[id]) this.setState(() => ({ group: id }));
		else await rpc.callClient('Target-SelectItem', [type, { group, id }]);
	}

	getItems() {
		const { type, group } = this.state;

		switch (group) {
			case 'passengers':
				return <Passengers onClick={this.onCellClick.bind(this)} />;
			case 'animations':
				return <Animations showCells={this.animateItems.bind(this)} />;
			case 'organization':
				return <Organization />;

			default:
				return Object.entries(
					group ? groups[group] : sections[type as any]
				).map(([name, data]) => (
					<Cell
						key={name}
						label={isArray(data) ? data[1] : name}
						title={isArray(data) ? data[0] : data}
						onClick={this.onCellClick.bind(this, name)}
					/>
				));
		}
	}

	render() {
		const { type, group } = this.state;

		return (
			<CSSTransition in={!!type} timeout={200} classNames="fadeIn" unmountOnExit>
				{type ? (
					<div className="target-menu">
						<ul ref={this.list} className="target-menu_cells">
							<Cell
								label="close"
								title={group ? 'Назад' : 'Закрыть'}
								onClick={this.toPrev.bind(this)}
							/>

							{this.getItems()}
						</ul>
					</div>
				) : (
					<div></div>
				)}
			</CSSTransition>
		);
	}
}
