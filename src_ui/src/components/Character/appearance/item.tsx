import React from 'react';
import Selector from '../selector';

type Props = {
	style: number;
	color: number;

	styles: number;

	update: (style: number, color: number) => void;
};

export default function Item({ style, color, styles, update }: Props) {
	return (
		<div>
			<Selector
				title="Стиль"
				items={[-1, ...Array(styles + 1).keys()]}
				value={style}
				customValue={`${style + 1}`}
				onChange={(value) => update(value, color)}
			/>
			<Selector
				title="Цвет"
				items={[...Array(71).keys()]}
				value={color}
				onChange={(value) => update(style, value)}
			/>
		</div>
	);
}
