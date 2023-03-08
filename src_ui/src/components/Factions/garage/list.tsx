import React from 'react';
import classNames from 'classnames';
import vehicleList from 'data/vehicles.json';

type Props = {
	selected?: string;
	items: string[];
	onSelect: (model: string) => void;
};

export default function FactionGarageList({ items, selected, onSelect }: Props) {
	return (
		<div className="faction-garage_list">
			<ul className="faction-garage_items">
				{items.map((item) => (
					<li
						key={item}
						className={classNames('faction-garage_item', { active: item === selected })}
						onClick={() => onSelect(item)}
					>
						{(vehicleList as any)[item] ?? item}
					</li>
				))}
			</ul>
		</div>
	);
}
