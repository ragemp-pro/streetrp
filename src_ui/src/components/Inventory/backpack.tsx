import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import { InventoryItem } from './index';
import Grid from './grid';

type Props = {
	items: InventoryItem[];
	cells: number;
};

export default function InventoryBackpack({ items, cells }: Props) {
	return (
		<div className="inventory_backpack">
			<PrimaryTitle className="inventory_backpack-title">Рюкзак</PrimaryTitle>

			<Grid startIndex={6} cells={24} available={cells - 6} items={items} />
		</div>
	);
}
