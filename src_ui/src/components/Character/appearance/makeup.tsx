import React, { Fragment } from 'react';
import Selector from '../selector';

type Props = {
	update: (id: number, value: number, color?: number) => void;
	values: [number, number][];
};

const items = [
	{
		id: 4,
		name: 'Макияж',
		max: 15,
		colors: 0
	},
	{
		id: 5,
		name: 'Румянец',
		max: 6,
		colors: 71
	},
	{
		id: 8,
		name: 'Помада',
		max: 9,
		colors: 71
	}
];

export default function Makeup({ values, update }: Props) {
	return (
		<div>
			{items.map((item) => (
				<Fragment key={item.id}>
					<Selector
						title={item.name}
						items={[-1, ...Array(item.max).keys()]}
						value={values[item.id][0]}
						customValue={`${values[item.id][0] + 1}`}
						onChange={(value) => update(item.id, value)}
					/>

					{item.colors > 0 && (
						<Selector
							title="Цвет"
							items={[...Array(item.colors).keys()]}
							value={values[item.id][1]}
							onChange={(value) => update(item.id, values[item.id][0], value)}
						/>
					)}
				</Fragment>
			))}
		</div>
	);
}
