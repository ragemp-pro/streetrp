import React from 'react';
import { List, ListItem } from 'framework7-react';
import { getApps } from '../apps';

type Props = {
	tabs: ReturnType<typeof getApps>;
	activeTab: string;
	openTab: (name: string) => void;
};

export default function TabletTabs({ tabs, activeTab, openTab }: Props) {
	return (
		<div className="tablet_tabs">
			<List noChevron>
				{Object.entries(tabs).map(([key, item]) => (
					<ListItem
						reloadAll
						link={item.route}
						key={key}
						title={item.title}
						selected={key === activeTab}
						onClick={() => openTab(key)}
					>
						<i
							slot="media"
							className="tablet_tabs-icon"
							style={{ backgroundColor: item.color }}
						>
							{React.createElement(item.icon)}
						</i>
					</ListItem>
				))}
			</List>
		</div>
	);
}
