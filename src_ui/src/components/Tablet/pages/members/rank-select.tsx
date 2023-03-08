import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { Rank } from 'store/tablet/ranks/types';
import { loadRanks } from 'store/tablet/ranks/actions';

type Props = {
	selected: string;

	ranks: Rank[];
	onSelect: (rank: Rank) => void;
} & ReturnType<typeof mapStateToProps> &
	typeof mapDispatchToProps;

function RankSelect({ ranks, selected, ...props }: Props) {
	const [rank, setRank] = useState<Rank>();

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
			<Navbar
				title="Ранг"
				backLink="Назад"
				onBackClick={() => rank && props.onSelect(rank)}
			/>

			<List inset>
				{ranks.map((item) => (
					<ListItem
						key={item.id}
						radio
						radioIcon="end"
						title={item.name}
						checked={item.name === (rank ? rank.name : selected)}
						onClick={() => setRank(item)}
					/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RankSelect);
