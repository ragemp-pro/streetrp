import React from 'react';
import { List, ListItem } from 'framework7-react';
import images from 'utils/images';

type Props = {
	username: string;
	rank: string;
	faction: string;
};

export default function TabletProfile({ username, faction, rank }: Props) {
	return (
		<div className="tablet_profile">
			<List mediaList>
				<ListItem title={username} footer={rank}>
					<img
						slot="media"
						src={images.getImage(`${faction}_logo.png`, 'factions')}
						alt="avatar"
					/>
				</ListItem>
			</List>
		</div>
	);
}
