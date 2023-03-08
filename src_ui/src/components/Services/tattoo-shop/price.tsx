import React from 'react';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import prettify from 'utils/prettify';

type Props = {
	value: number;
};

export default function TattooShopPrice({ value }: Props) {
	return (
		<AnimatedNumber
			className="tattoo-shop_price"
			value={value}
			duration={300}
			formatValue={prettify.price}
		/>
	);
}
