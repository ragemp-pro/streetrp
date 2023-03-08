import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';
import inventoryItems from 'data/inventory.json';
import Hint from './hint';

type Props = {
	items: { [name: string]: number };
	selected?: string;
	selectItem: (name: string) => void;
};

export default function SupermarketProducts({ items, selected, selectItem }: Props) {
	return (
		<div className="supermarket_products">
			<Hint>1. Выберите товар</Hint>

			<div className="supermarket_products-list">
				{Object.entries(items).map(([name, price]) => (
					<div
						className={classNames('supermarket_products-item', {
							active: selected === name
						})}
						key={name}
						onClick={() => selectItem(name)}
					>
						<h4>{(inventoryItems as any)[name].name}</h4>

						<img src={images.getImage(`${name}.png`, 'inventory')} alt={name} />

						<span>{prettify.price(price)}</span>
					</div>
				))}
			</div>
		</div>
	);
}
