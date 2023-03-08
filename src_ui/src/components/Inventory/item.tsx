import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import images from 'utils/images';
import InventoryContext from './context';

type Props = {
	id: number | string;
	name: string;
	amount: number;
	storage?: string;
	hideAmount?: boolean;
};

export default function InventoryItem({
	id,
	name,
	amount,
	storage = 'self',
	hideAmount
}: Props) {
	const { selectItem } = useContext(InventoryContext)!;

	const [, drag] = useDrag({
		item: {
			id,
			name,
			storage,
			type: 'item'
		}
	});

	return (
		<div
			ref={drag}
			className="inventory_item"
			id={`item-${id}`}
			onClick={() => selectItem({ cell: id, name, amount, storage })}
		>
			<img src={images.getImage(`${name}.png`, 'inventory')} alt={name} />

			{!hideAmount && <span className="inventory_item-amount">{amount}</span>}
		</div>
	);
}
