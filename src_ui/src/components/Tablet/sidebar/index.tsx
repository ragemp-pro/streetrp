import React from 'react';
import Profile from './profile';
import Tabs from './tabs';
import { getApps } from '../apps';

type Props = {
	user: {
		faction: string;
		name: string;
		rank: string;
	};

	activeTab: string;
	openTab: (name: string) => void;
};

export default function TabletSidebar({ user, activeTab, openTab }: Props) {
	return (
		<div className="tablet_sidebar">
			<Profile username={user.name} faction={user.faction} rank={user.rank} />
			<Tabs tabs={getApps(user.faction)} activeTab={activeTab} openTab={openTab} />
		</div>
	);
}
