import React from 'react';
import prettify from 'utils/prettify';
import OutlineInput from 'components/Common/outline-input';

type Props = {
	seller?: string;
	price: number;
	setPrice: (value: number) => void;
};

export default function TradingBottom({ seller, price, setPrice }: Props) {
	return (
		<div className="trading_bottom">
			<div className="trading_bottom-section">
				<h4>Продавец</h4>
				<p>{seller || 'Вы'}</p>
			</div>

			<div className="trading_bottom-section">
				<h4>Цена</h4>

				{seller ? (
					<p>{prettify.price(price)}</p>
				) : (
					<OutlineInput
						className="trading_input"
						min={1}
						max={100000000}
						value={price}
						onChange={setPrice}
					/>
				)}
			</div>
		</div>
	);
}
