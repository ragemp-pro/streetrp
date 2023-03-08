import React from 'react';
import vehicles from 'data/vehicles.json';
import Button from '../partials/button';
import Group from '../partials/group';
import { VehicleData } from './index';

type Props = {
	items: VehicleData[];
	selectItem: (vehicle: VehicleData) => void;
};

export default function VehiclesList({ items, selectItem }: Props) {
	return (
		<Group className="vehicles_list">
			{items.map((item, index) => (
				<Button key={index} onClick={() => selectItem(item)}>
					{(vehicles as any)[item.model] ?? item.model}
				</Button>
			))}
		</Group>
	);
}
