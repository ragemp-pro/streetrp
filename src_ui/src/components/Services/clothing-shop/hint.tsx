import React from 'react';
import images from 'utils/images';

export default function Hint() {
	return (
		<div className="clothing-shop_hint">
			<img src={images.getImage('mouse-drag.svg')} alt="mouse left" />

			<p className="clothing-shop_hint-text">Поворот персонажа</p>
		</div>
	);
}
