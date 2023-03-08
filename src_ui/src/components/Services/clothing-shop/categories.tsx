import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const items = {
	hat: 'Головной убор',
	jacket: 'Куртка',
	shirt: 'Футболка',
	pants: 'Брюки',
	shoes: 'Обувь',
	glasses: 'Очки',
	mask: 'Маска',
	accessories: 'Аксессуары',
	watch: 'Часы'
};

type Props = {
	current: string;
	setCategory: (name: string) => void;
};

export default function ClothingShopCategories({ current, setCategory }: Props) {
	return (
		<div className="clothing-shop_categories">
			{Object.entries(items).map(([name, title]) => (
				<div
					className={classNames('clothing-shop_categories-item', {
						active: current === name
					})}
					key={name}
					onClick={() => setCategory(name)}
				>
					<img src={images.getImage(`${name}.svg`)} alt={title} />
				</div>
			))}
		</div>
	);
}
