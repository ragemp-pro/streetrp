import React from 'react';
import images from 'utils/images';
import GradientButton from 'components/Common/gradient-button';
import Point from 'components/Common/point';

type Props = {
	icon: string;

	title: string;
	description: string;
	price: number;

	onClick: () => void;
};

export default function DonationProduct({
	icon,
	title,
	description,
	price,
	onClick
}: Props) {
	return (
		<div className="donation_product">
			<div className="donation_product-icon">
				<img src={images.getImage(`${icon}.png`, 'donation')} alt={title} />

				<span />
			</div>

			<h3 className="donation_product-title">{title}</h3>
			<p className="donation_product-descr">{description}</p>

			<Point className="donation_product-price" amount={price} />

			<div className="donation_product-buy">
				<GradientButton className="donation_product-btn" onClick={onClick}>
					Купить
				</GradientButton>
			</div>
		</div>
	);
}
