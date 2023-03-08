import React, { Component } from 'react';
import { Page, Navbar, List, ListItem, BlockHeader, Toggle } from 'framework7-react';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';
import { Rank } from 'store/tablet/ranks/types';

type Props = {
	rank: Rank;
};
type State = {
	salary: number;
	permissions: { [name: string]: boolean };
	updated: boolean;
};

const permissionList: { [name: string]: string } = {
	garage: 'Гараж',
	inventory: 'Склад',
	workshop: 'Мастерская',
	warehouse: 'Доставка материалов',
	wanted: 'Розыск и арест',
	members: 'Управлять участниками'
};

export default class RankItem extends Component<Props, State> {
	readonly state: State = {
		salary: 0,
		permissions: {},

		updated: false
	};

	componentDidMount() {
		this.getRankData();
	}

	async getRankData() {
		const data = await rpc.callServer('Faction-GetRankData', this.props.rank.id);

		this.setState(() => ({ ...data }));
	}

	togglePermission(name: string) {
		const { permissions } = this.state;

		this.setState(() => ({
			permissions: { ...permissions, [name]: !permissions[name] },
			updated: true
		}));
	}

	async updateRank() {
		const { rank } = this.props;
		const { permissions, updated } = this.state;

		if (updated) {
			await rpc.callServer('FactionLeader-EditRank', [rank.id, permissions]);
		}
	}

	render() {
		const { rank } = this.props;
		const { salary, permissions } = this.state;

		return (
			<Page>
				<Navbar
					title={rank.name}
					backLink="Назад"
					onClickBack={this.updateRank.bind(this)}
				/>

				<List inset>
					<ListItem title="Зарплата" after={prettify.price(salary)} />
				</List>

				<BlockHeader>Права доступа:</BlockHeader>

				<List inset>
					{Object.entries(permissions).map(
						([name, access]) =>
							permissionList[name] && (
								<ListItem key={name} title={permissionList[name]}>
									<Toggle
										slot="after"
										color="green"
										name={name}
										checked={access}
										onChange={this.togglePermission.bind(this, name)}
									/>
								</ListItem>
							)
					)}
				</List>
			</Page>
		);
	}
}
