import React, { useState } from 'react';
import Slider from 'rc-slider';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';

type Props = {
	amount: number;
	confirm: (value: number) => void;
	cancel: () => void;
};

export default function InventorySeparate({ amount, confirm, cancel }: Props) {
	const [value, setValue] = useState<number>(1);

	return (
		<div className="inventory_separate">
			<PrimaryTitle className="inventory_separate-title">
				Разделение предмета
			</PrimaryTitle>

			<div className="inventory_separate-slider">
				<Slider
					value={value}
					min={1}
					max={amount === 1 ? 1 : amount - 1}
					onChange={setValue}
				/>

				<span className="inventory_separate-current">{value}</span>
				<span className="inventory_separate-max">{amount === 1 ? 1 : amount - 1}</span>
			</div>

			<div className="inventory_separate-buttons">
				<OutlineButton onClick={cancel}>Закрыть</OutlineButton>
				<GradientButton onClick={() => confirm(value)}>Разделить</GradientButton>
			</div>
		</div>
	);
}
