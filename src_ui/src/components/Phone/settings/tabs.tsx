import React from 'react';
import { IconType } from 'react-icons';
import { IoLayers, IoImages, IoMic } from 'react-icons/io5';
import Group from '../partials/group';
import Button from '../partials/button';

type Tab = {
	title: string;
	color: string;
	icon: IconType;
};

const tabList: { [key: string]: Tab } = {
	keys: {
		title: 'Назначение клавиш',
		color: '#8D8E92',
		icon: IoLayers
	},
	voice: {
		title: 'Голосовой чат',
		color: '#5656D6',
		icon: IoMic
	},
	wallpaper: {
		title: 'Обои',
		color: '#30A9DC',
		icon: IoImages
	}
};

type Props = {
	openTab: (name: string) => void;
};

export default function SettingsTabs({ openTab }: Props) {
	return (
		<div className="settings_tabs">
			<Group className="settings_tabs-list">
				{Object.entries(tabList).map(([key, item]) => (
					<Button
						className="settings_tabs-item"
						icon="arrow"
						key={key}
						onClick={() => openTab(key)}
					>
						<i className="settings_tabs-icon" style={{ backgroundColor: item.color }}>
							{React.createElement(item.icon)}
						</i>

						<>{item.title}</>
					</Button>
				))}
			</Group>
		</div>
	);
}
