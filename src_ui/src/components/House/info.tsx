import React from 'react';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';

type Props = {
	isOwner: boolean;
	owner: string;
	tax: number;
	price: number;
	paid: number;
};

export default function HouseInfo({ isOwner, owner, tax, price, paid }: Props) {
	return (
		<div className="house_info">
			<PrimaryTitle>Информация</PrimaryTitle>

			<div className="house_info-container">
				<div className="house_info-item">
					<h4 className="house_info-name">Владелец</h4>

					<span className="house_info-value">{owner || 'Отсутствует'}</span>
				</div>

				<div className="house_info-item">
					<h4 className="house_info-name">Стоимость в день</h4>

					<span className="house_info-value">{prettify.price(tax)}</span>
				</div>

				<div className="house_info-item">
					<h4 className="house_info-name">{isOwner ? 'Гос. продажа' : 'Цена'}</h4>

					<span className="house_info-value">{prettify.price(price)}</span>
				</div>
			</div>

			{isOwner && (
				<div className="house_info-item house_info-item--main">
					<h4 className="house_info-name">Оплачено дней</h4>

					<span className="house_info-value">{paid}</span>

					<p className="house_info-remark">Оплатить услуги можно в банке</p>
				</div>
			)}
		</div>
	);
}
