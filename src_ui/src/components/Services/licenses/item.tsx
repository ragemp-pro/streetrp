import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';
import GradientButton from 'components/Common/gradient-button';

const licenses = {
	house: {
		name: 'Дом',
		description: 'Позволяет иметь 2 дома'
	},
	business: {
		name: 'Бизнес',
		description: 'Разрешает приобретение 1го бизнеса'
	},
	car: {
		name: 'Легковые ТС',
		description: 'Разрешает управление легковыми ТС'
	},
	motorcycle: {
		name: 'Мотоциклы',
		description: 'Разрешает управление мотоциклами'
	},
	boat: {
		name: 'Лодки',
		description: 'Разрешает управление водными ТС'
	},
	air: {
		name: 'Воздушные ТС',
		description: 'Разрешает управление воздушными ТС'
	},
	truck: {
		name: 'Грузовые ТС',
		description: 'Разрешает управление грузовыми ТС'
	},
	weapon: {
		name: 'Оружие',
		description: 'Требуется для ношения оружия'
	},
	fishing: {
		name: 'Рыболовлю',
		description: 'Требуется для вылова рыбы в большем объеме'
	}
};

type Props = {
	name: string;
	price: number;
	bought: boolean;
	buy: () => void;
};

export default function LicensesItem({ name, price, bought, buy }: Props) {
	return (
		<div
			className={classNames('licenses_item', {
				disabled: bought
			})}
			style={{
				backgroundImage: `${
					bought ? 'linear-gradient(black, black),' : ''
				} url(${images.getImage(`${name}.jpg`, 'licenses')})`
			}}
		>
			<PrimaryTitle className="licenses_item-title">Лицензия</PrimaryTitle>
			<h3 className="licenses_item-subtitle">На {(licenses as any)[name].name}</h3>

			{!bought ? (
				<>
					<p className="licenses_item-info">{(licenses as any)[name].description}</p>

					<div className="licenses_item-price">
						<h4>Стоимость</h4>

						<span>{prettify.price(price)}</span>
					</div>

					<GradientButton className="licenses_item-buy" onClick={buy}>
						Купить
					</GradientButton>
				</>
			) : (
				<>
					<span className="licenses_item-checkmark" />
				</>
			)}
		</div>
	);
}
