import React, { Component } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import inventoryItems from 'data/inventory.json';

const actions: { [name: string]: string } = {
	craft: 'Крафт',
	put: 'Положил',
	took: 'Взял'
};

type JournalItem = {
	member: string;
	action: string;
	amount: number;
	thing: string;
	createdAt: string;
};

type State = {
	items: JournalItem[];
	loading: boolean;
	hasMore: boolean;
};

export default class FactionJournal extends Component<{}, State> {
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

		const data: JournalItem[] = await rpc.callServer(
			'FactionJournal-GetList',
			items.length
		);

		this.setState((state) => ({
			items: [...state.items, ...data],
			hasMore: data.length >= 10,
			loading: false
		}));
	}

	render() {
		const { items, hasMore, loading } = this.state;

		return (
			<Page
				infinite={hasMore}
				infinitePreloader={loading}
				onInfinite={this.loadMore.bind(this)}
			>
				<Navbar title="Журнал действий" />

				<List mediaList inset>
					{items.map((item, index) => (
						<ListItem
							key={index}
							title={item.member}
							after={actions[item.action]}
							subtitle={`${(inventoryItems as any)[item.thing]?.name ?? item.thing} - ${
								item.amount
							}`}
							text={moment(item.createdAt).format('DD.MM.YY, HH:mm')}
						/>
					))}
				</List>
			</Page>
		);
	}
}
