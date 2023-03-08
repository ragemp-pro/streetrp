import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { loadMembers } from 'store/tablet/members/actions';

type Props = {} & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

type State = {
	hasMore: boolean;
	loading: boolean;
};

class Members extends Component<Props, State> {
	readonly state: State = {
		loading: false,
		hasMore: true
	};

	componentDidMount() {
		if (this.props.members.length) return;

		this.getMembers();
	}

	async getMembers() {
		const { hasMore, loading } = this.state;
		if (loading || !hasMore) return;

		this.setState(() => ({ loading: true }));

		const members = await rpc.callServer('Faction-GetMembers', this.props.members.length);

		this.props.loadMembers(members);
		this.setState(() => ({ loading: false, hasMore: members.length >= 15 }));
	}

	render() {
		const { members } = this.props;
		const { hasMore, loading } = this.state;

		return (
			<Page
				infinite={hasMore}
				infinitePreloader={loading}
				onInfinite={this.getMembers.bind(this)}
			>
				<Navbar title="Состав" />

				<List inset>
					{members.map((item) => (
						<ListItem
							link="member/"
							key={item.userId}
							title={item.name}
							after={item.online ? 'Онлайн' : ''}
							routeProps={{ member: item }}
						/>
					))}
				</List>
			</Page>
		);
	}
}

const mapStateToProps = ({ tablet }: StoreState) => ({
	members: tablet.members.items
});

const mapDispatchToProps = {
	loadMembers
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
