import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { Rank } from 'store/tablet/ranks/types';
import { loadRanks } from 'store/tablet/ranks/actions';

type Props = {} & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

function Ranks({ ranks, ...props }: Props) {
	useEffect(() => {
		getRanks();
	});

	async function getRanks() {
		if (ranks.length) return;

		const items: Rank[] = await rpc.callServer('Faction-GetRanks');
		props.loadRanks(items);
	}

	return (
		<Page>
			<Navbar title="Ранги" />

			<List inset>
				{ranks.map((rank) => (
					<ListItem link="rank/" key={rank.id} title={rank.name} routeProps={{ rank }} />
				))}
			</List>
		</Page>
	);
}

const mapStateToProps = ({ tablet }: StoreState) => ({
	ranks: tablet.ranks.items
});

const mapDispatchToProps = {
	loadRanks
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranks);
