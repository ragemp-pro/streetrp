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

export default function WorkshopProducts({ items, selected, selectItem }: Props) {
	return (
		<div className="workshop_products">
			<Hint>1. Выберите предмет</Hint>

			<div className="workshop_products-list">
				{Object.entries(items).map(([name, price]) => (
					<div
						className={classNames('workshop_products-item', {
							active: selected === name
						})}
						key={name}
						onClick={() => selectItem(name)}
					>
						<h4>{(inventoryItems as any)[name].name}</h4>

						<img src={images.getImage(`${name}.png`, 'inventory')} alt={name} />

						<span>{prettify.materials(price)}</span>
					</div>
				))}
			</div>
		</div>
	);
}
