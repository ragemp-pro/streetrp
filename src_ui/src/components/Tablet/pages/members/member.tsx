import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'framework7/types';
import { Page, Navbar, List, ListItem, ListButton } from 'framework7-react';
import rpc from 'utils/rpc';
import { Rank } from 'store/tablet/ranks/types';
import { Member } from 'store/tablet/members/types';
import { updateMember, removeMember } from 'store/tablet/members/actions';

type Props = {
	f7router: Router.Router;
	member: Member;
} & typeof mapDispatchToProps;

class MemberItem extends Component<Props> {
	async setRank(rank: Rank) {
		const { member } = this.props;

		if (!rank || member.rank === rank.name) return;

		await rpc.callServer('FactionLeader-SetRank', [member.userId, rank.id]);
		this.props.updateMember({ ...member, rank: rank.name });
		member.rank = rank.name;

		this.forceUpdate();
	}

	async kick() {
		const { userId: member } = this.props.member;

		await rpc.callServer('FactionLeader-Kick', member);
		this.props.removeMember(member);

		this.props.f7router.back();
	}

	render() {
		const { member } = this.props;

		return (
			<Page>
				<Navbar title="Участник" backLink="Назад" />

				<List inset>
					<ListItem title="Имя" after={member.name} />
					<ListItem
						link="rank/"
						title="Ранг"
						after={member.rank}
						routeProps={{ selected: member.rank, onSelect: this.setRank.bind(this) }}
					/>
				</List>

				<List inset>
					<ListButton title="Уволить" color="red" onClick={this.kick.bind(this)} />
				</List>
			</Page>
		);
	}
}

const mapDispatchToProps = {
	updateMember,
	removeMember
};

export default connect(() => ({}), mapDispatchToProps)(MemberItem);
