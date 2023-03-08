import React from 'react';
import Cell from './cell';
import Item from './item';
import { InventoryItem } from './index';

type Props = {
	items: InventoryItem[];
	startIndex: number;
	cells: number;
	available?: number;
	storage?: string;
};

export default function InventoryGrid({
	cells,
	available,
	items,
	storage = 'self',
	startIndex
}: Props) {
	return (
		<div className="inventory_grid">
			{[...Array(cells)].map((value, index) => {
				const id = startIndex + index;
				const isAvailable = typeof available === 'number' ? available > index : true;
				const item = items[id];

				return (
					<Cell
						className="inventory_grid-cell"
						id={id}
						blocked={!isAvailable}
						key={index}
						storage={storage}
					>
						{isAvailable && item && (
							<Item id={id} name={item.name} amount={item.amount} storage={storage} />
						)}
					</Cell>
				);
			})}
		</div>
	);
}
