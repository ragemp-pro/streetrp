import React from 'react';
// @ts-ignore
import { usePreview } from 'react-dnd-preview';
import images from 'utils/images';

export default function InventoryPreview() {
	const { display, item, style } = usePreview();

	return display ? (
		<div className="inventory_preview" style={style}>
			<img src={images.getImage(`${item.name}.png`, 'inventory')} alt={item.name} />
		</div>
	) : null;
}
