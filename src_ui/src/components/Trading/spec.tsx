import React from 'react';
import images from 'utils/images';

type Props = {
	type: 'house' | 'vehicle';
	items: { [name: string]: number };
};

export default function TradingSpec({ type, items }: Props) {
	return (
		<div className="trading_spec">
			<ul className="trading_spec-list">
				{Object.entries(items).map(([name, value]) => (
					<li className="trading_spec-item" key={name}>
						<img
							src={images.getImage(`${name}.svg`, type === 'vehicle' ? 'lsc' : '')}
							alt={name}
						/>

						<span>{type === 'vehicle' ? value + 1 : value}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
