import React, { Component } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import rpc from 'utils/rpc';

type WantedItem = {
	id?: string;
	creator?: string;
	suspect: string;
	priority: number;
	reason: string;
	createdAt: string;
};

type State = {
	items: WantedItem[];
	loading: boolean;
	hasMore: boolean;
};

export default class Wanted extends Component<{}, State> {
	readonly state: State = {
		loading: false,
		hasMore: true,
		items: []
	};

	componentDidMount() {
		this.loadMore();
	}

	async loadMore() {
		const { items, hasMore, loading } = this.state;

		if (loading || !hasMore) return;

		this.setState(() => ({ loading: true }));

		const data: WantedItem[] = await rpc.callServer('WantedList-GetItems', items.length);

		this.setState((state) => ({
			items: [...state.items, ...data],
			hasMore: data.length >= 10,
			loading: false
		}));
	}

	addItem(item: WantedItem) {
		this.setState((state) => ({ items: [item, ...state.items] }));
	}

	removeItem(id: string) {
		this.setState((state) => ({ items: state.items.filter((item) => item.id !== id) }));
	}

	render() {
		const { items, hasMore, loading } = this.state;

		return (
			<Page
				infinite={hasMore}
				infinitePreloader={loading}
				onInfinite={this.loadMore.bind(this)}
			>
				<Navbar title="Розыск" backLink="Назад" />

				<List mediaList inset>
					{items.map((item, index) => (
						<ListItem
							link="item/"
							key={index}
							title={item.suspect}
							text={item.reason}
							badge={item.priority}
							badgeColor={
								item.priority < 3 ? 'gray' : item.priority >= 5 ? 'orange' : 'blue'
							}
							routeProps={{ data: item, onRemove: this.removeItem.bind(this) }}
						/>
					))}
				</List>
			</Page>
		);
	}
}
