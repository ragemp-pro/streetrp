import React from 'react';
import images from 'utils/images';
import apps from '../apps';

type Props = {
	openApp: (name: string) => void;
};

export default function Dock({ openApp }: Props) {
	return (
		<div className="phone_dock">
			<ul className="phone_dock-list">
				{Object.entries(apps).map(
					([key, app]) =>
						app.attached && (
							<li key={key} className="phone_dock-item" onClick={() => openApp(key)}>
								<img src={images.getImage(`${key}.svg`, 'phone')} alt={key} />
							</li>
						)
				)}
			</ul>
		</div>
	);
}
