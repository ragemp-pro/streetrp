import React, { useState, useContext } from 'react';
import images from 'utils/images';
import PhoneContext from '../context';
import apps from '../apps';
import Pagination from './pagination';
import Dock from './dock';

export default function PhoneMain() {
	const context = useContext(PhoneContext);
	const [page, setPage] = useState<number>(0);

	return (
		<div className="phone_main">
			<ul className="phone_main-apps">
				{Object.entries(apps).map(
					([key, app]) =>
						!app.attached && (
							<li key={key} onClick={() => context!.openApp(key)}>
								<img src={images.getImage(`${key}.svg`, 'phone')} alt={key} />
								<span className="name">{app.name}</span>
							</li>
						)
				)}
			</ul>

			<Pagination pages={1} current={page} selectPage={setPage} />

			<Dock openApp={context!.openApp} />
		</div>
	);
}
