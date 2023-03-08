import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';
import images from 'utils/images';

type Props = {
	weapon: string;
};

export default function WeaponsPreview({ weapon }: Props) {
	const [clipSize, setClipSize] = useState<number>(0);

	useEffect(() => {
		rpc
			.callClient('Weapons-GetClipSize', `weapon_${weapon}`)
			.then((data) => setClipSize(data));
	}, [weapon]);

	return (
		<div className="weapons_preview">
			<img src={images.getImage(`${weapon}.png`, 'inventory')} alt={weapon} />

			<div className="weapons_preview-ammo">
				<h4 className="title">Патрон в магазине</h4>

				<span className="value">{clipSize}</span>
			</div>
		</div>
	);
}
