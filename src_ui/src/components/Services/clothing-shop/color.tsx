import React from 'react';
import Slider from 'rc-slider';

type Props = {
	current: number;
	amount: number;
	setColor: (index: number) => void;
};

export default function ClothingShopColor({ current, amount, setColor }: Props) {
	return (
		<div className="clothing-shop_color">
			<h4 className="clothing-shop_color-title">Цвет</h4>

			<Slider value={current} min={0} max={amount - 1} onChange={setColor} />
		</div>
	);
}
