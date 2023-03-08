import React, { Component } from 'react';
import rpc from 'utils/rpc';
import InfiniteScroll from 'react-infinite-scroller';
import Item from './item';

type Report = {
	_id: string;
	sender: string;
	message: string;
	timestamp: string;
};

type State = {
	items: Report[];
	hasMore: boolean;
};

export default class AdminReports extends Component<{}, State> {
	readonly state: State = {
		items: [],
		hasMore: false
	};

	componentDidMount() {
		this.fetchItems(0);
	}

	async fetchItems(page: number) {
		const data: Report[] = await rpc.callServer('Admin-GetReports', page);

		this.setState((state) => ({
			items: [...state.items, ...data],
			hasMore: data.length > 10
		}));
	}

	async acceptReport(id: string) {
		await rpc.callServer('Admin-AcceptReport', id);

		this.setState((state) => ({ items: state.items.filter((item) => item._id !== id) }));
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
						{items.map((item) => (
							<Item
								key={item._id}
								sender={item.sender}
								message={item.message}
								time={item.timestamp}
								onAccept={this.acceptReport.bind(this, item._id)}
							/>
						))}
					</InfiniteScroll>
				</div>
			</div>
		);
	}
}
