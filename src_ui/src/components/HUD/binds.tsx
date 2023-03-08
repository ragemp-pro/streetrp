import React from 'react';
import images from 'utils/images';
import Key from './key';

const controls: { [name: string]: string } = {
	cursor: '`',
	inventory: 'I',
	target: 'K',
	phone: 'M',
	noHUD: '0'
};

type Props = {
	items: {
		[name: string]: string;
	};
};

export default function Binds({ items }: Props) {
	return (
		<div className="hud_binds">
			<ul className="hud_binds-list">
				{Object.entries(controls).map(([key, value], index) => (
					<li className="hud_binds-item" key={index}>
						<img src={images.getImage(`${key}.svg`)} alt="bind icon" />

						<Key>{items[key] ?? value}</Key>
					</li>
				))}
			</ul>
		</div>
	);
}
