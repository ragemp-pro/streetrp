import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import { InventoryItem } from './index';
import Grid from './grid';

type Props = {
	items: InventoryItem[];
};

export default function InventoryPockets({ items }: Props) {
	return (
		<div className="inventory_pockets">
			<PrimaryTitle className="inventory_title">Карманы</PrimaryTitle>

			<Grid cells={6} startIndex={0} items={items} />
		</div>
	);
}
