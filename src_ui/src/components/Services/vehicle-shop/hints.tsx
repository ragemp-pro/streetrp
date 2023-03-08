import React from 'react';
import images from 'utils/images';

export default function VehicleShopHints() {
	return (
		<div className="vehicle-shop_hints">
			<div className="vehicle-shop_hints-item">
				<img src={images.getImage('esc-key.svg')} alt="ESC" />

				<p className="vehicle-shop_hints-text">Нажмите, чтобы закрыть меню</p>
			</div>
		</div>
	);
}
