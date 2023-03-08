import React from 'react';
import Slider from '../slider';

type Item = {
	id: number;
	name: string;
	max: number;
	gender?: number;
};

const items: Item[] = [
	{
		id: 0,
		name: 'Прыщи',
		max: 23
	},
	{
		id: 3,
		name: 'Старение',
		max: 14
	},
	{
		id: 6,
		name: 'Оттенок лица',
		max: 11
	},
	{
		id: 7,
		name: 'Урон от солнца',
		max: 10
	},
	{
		id: 9,
		name: 'Веснушки на лице',
		max: 17
	}
];

type Props = {
	update: (id: number, value: number) => void;
	values: [number, number][];
};

export default function Other({ values, update }: Props) {
	return (
		<div>
			{items.map((item) => (
				<Slider
					key={item.name}
					title={item.name}
					value={values[item.id][0]}
					min={-1}
					max={item.max}
					onChange={(value) => update(item.id, value)}
				/>
			))}
		</div>
	);
}
