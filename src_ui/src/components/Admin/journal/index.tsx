import React, { Component } from 'react';
import rpc from 'utils/rpc';
import InfiniteScroll from 'react-infinite-scroller';
import Item from './item';

type Report = {
	admin: string;
	action: string;
	note: string;
	createdAt: string;
};

type State = {
	items: Report[];
	hasMore: boolean;
};

export default class AdminJournal extends Component<{}, State> {
	readonly state: State = {
		items: [],
		hasMore: false
	};

	componentDidMount() {
		this.fetchItems(0);
	}

	async fetchItems(page: number) {
		const data: Report[] = await rpc.callServer('Admin-GetJournal', page);

		this.setState((state) => ({
			items: [...state.items, ...data],
			hasMore: data.length > 10
		}));
	}

	render() {
		const { items, hasMore } = this.state;

		return (
			<div className="admin_reports">
				<div className="admin_reports-list">
					<InfiniteScroll
						pageStart={0}
						loadMore={this.fetchItems.bind(this)}
						hasMore={hasMore}
						useWindow={false}
					>
						{items.map((item, index) => (
							<Item
								key={index}
								admin={item.admin}
								action={item.action}
								message={item.note}
								time={item.createdAt}
							/>
						))}
					</InfiniteScroll>
				</div>
			</div>
		);
	}
}
