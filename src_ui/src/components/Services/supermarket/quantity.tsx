import React from 'react';
import OutlineInput from 'components/Common/outline-input';
import Hint from './hint';

type Props = {
	value: number;
	select: (quantity: number) => void;
};

export default function SupermarketQuantity({ value, select }: Props) {
	return (
		<div className="supermarket_quantity">
			<Hint>2. Укажите количество товара</Hint>

			<OutlineInput
				className="supermarket_quantity-input"
				value={value}
				min={0}
				max={1000}
				onChange={select}
			/>
		</div>
	);
}
