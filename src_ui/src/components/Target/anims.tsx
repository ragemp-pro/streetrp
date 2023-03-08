import React, { useState } from 'react';
import rpc from 'utils/rpc';
import Cell from './cell';

type Props = {
	showCells: () => void;
};

const categories = {
	stop: 'Остановить',
	stand: 'Стойки',
	social: 'Cоциальные',
	dance: 'Танцы',
	sport: 'Спорт',
	others: 'Другие'
};

export default function TargetAnims({ showCells }: Props) {
	const [category, setCategory] = useState<string>();
	const [items, setItems] = useState<{ [type: string]: string[] }>({});

	async function selectCategory(type: string) {
		if (items[type]) return;

		const anims = await rpc.callClient('PlayerAnims-GetList', type);
		if (!anims) return playAnim();

		setItems({ ...items, [type]: anims });
		setCategory(type);
		showCells();
	}

	function playAnim(id?: number) {
		rpc.callClient('PlayerAnims-SetAnim', [category, id]);
	}

	return (
		<>
			{category && items[category]
				? items[category].map((item, index) => (
						<Cell
							key={item}
							label={category}
							title={item}
							onClick={() => playAnim(index)}
						/>
				  ))
				: Object.entries(categories).map(([type, name]) => (
						<Cell
							key={type}
							label={type}
							title={name}
							onClick={() => selectCategory(type)}
						/>
				  ))}
		</>
	);
}
