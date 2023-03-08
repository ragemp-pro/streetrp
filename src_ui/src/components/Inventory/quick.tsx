import React from 'react';
import { InventoryItem } from './index';
import Cell from './cell';
import Item from './item';

type Props = {
	equip: (cell: number, slot: string) => void;
	items: { [name: string]: InventoryItem };
};

export default function InventoryQuick({ items, equip }: Props) {
	return (
		<div className="inventory_quick">
			<h3 className="inventory_quick-title">Быстрый доступ</h3>

			<div className="inventory_quick-grid">
				{[...Array(3)].map((_, index) => {
					const id = `quick_${index + 1}`;
					const item = items[id];

					return (
						<Cell
							className="inventory_quick-cell"
							id={id}
							key={index}
							onDrop={equip as any}
							blocked={!!item}
						>
							{item && <Item id={id} name={item.name} amount={1} hideAmount />}

							<span className="inventory_quick-key">{index + 1}</span>
						</Cell>
					);
				})}
			</div>
		</div>
	);
}
