import React from 'react';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import prettify from 'utils/prettify';

type Props = {
	value: number;
};

export default function ClothingShopPrice({ value }: Props) {
	return (
		<AnimatedNumber
			className="clothing-shop_price"
			value={value}
			duration={300}
			formatValue={prettify.price}
		/>
	);
}
