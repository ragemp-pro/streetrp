import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const items = {
	head: 'Голова',
	torso: 'Торс',
	leftarm: 'Левая рука',
	rightarm: 'Правая рука',
	leftleg: 'Левая нога',
	rightleg: 'Правая нога'
};

type Props = {
	current: string;
	setCategory: (name: string) => void;
};

export default function TattooShopCategories({ current, setCategory }: Props) {
	return (
		<div className="tattoo-shop_categories">
			{Object.entries(items).map(([name, title]) => (
				<div
					className={classNames('tattoo-shop_categories-item', {
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
