import React from 'react';
import rpc from 'utils/rpc';
import Navigation from '../../partials/navigation';
import Item from './item';

type Props = {
	current: string;
	close: () => void;
};

export default function SettingsWallpaper({ current, close }: Props) {
	async function changeWallpaper(name: string) {
		await rpc.callClient('Phone-SetWallpaper', name);
	}

	return (
		<div className="settings_wallpaper">
			<Navigation title="Обои" close={{ title: 'Настройки', onClick: close }} />

			<div className="settings_wallpaper-items">
				{[...Array(9).keys()].map((item) => {
					const name = item.toString();

					return (
						<Item
							key={item}
							name={name}
							selected={current === name}
							select={changeWallpaper}
						/>
					);
				})}
			</div>
		</div>
	);
}
