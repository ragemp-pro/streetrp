import React from 'react';
import OutlineInput from 'components/Common/outline-input';
import Hint from './hint';

type Props = {
	value: number;
	select: (quantity: number) => void;
};

export default function WorkshopQuantity({ value, select }: Props) {
	return (
		<div className="workshop_quantity">
			<Hint>2. Укажите количество предмета</Hint>

			<OutlineInput
				className="workshop_quantity-input"
				value={value}
				min={0}
				max={1000}
				onChange={select}
			/>
		</div>
	);
}
