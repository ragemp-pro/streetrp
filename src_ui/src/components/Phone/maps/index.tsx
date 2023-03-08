import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Title from '../partials/title';
import SearchInput from '../partials/search';
import Group from '../partials/group';
import Button from '../partials/button';

type State = {
	items: string[];
	selected?: string;
	searchValue: string;
};

export default class Maps extends Component<{}, State> {
	readonly state: State = {
		items: [],
		searchValue: ''
	};

	componentDidMount() {
		rpc.callServer('Blips-GetNames').then((items: string[]) => {
			this.setState(() => ({ items: items.sort() }));
		});
	}

	async showNearestItem(name: string) {
		await rpc.callServer('Blips-MarkNearest', name);

		this.setState(() => ({ selected: name }));
	}

	getFilteredItems() {
		const { items, searchValue } = this.state;

		return items.filter(
			(item) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
		);
	}

	render() {
		const { searchValue, selected } = this.state;

		return (
			<div className="maps">
				<div className="maps_header">
					<Title>Список мест</Title>

					<SearchInput
						placeholder="Поиск"
						value={searchValue}
						onChange={(value: string) => this.setState(() => ({ searchValue: value }))}
					/>
				</div>

				<Group className="maps_list">
					{this.getFilteredItems().map((item, index) => (
						<Button
							icon={selected === item ? 'check' : undefined}
							key={index}
							onClick={this.showNearestItem.bind(this, item)}
						>
							{item}
						</Button>
					))}
				</Group>
			</div>
		);
	}
}
