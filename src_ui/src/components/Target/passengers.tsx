import React, { useEffect, useState } from 'react';
import rpc from 'utils/rpc';
import Cell from './cell';

type Props = {
	onClick: (id: string) => Promise<void>;
};

export default function TargetPassengers({ onClick }: Props) {
	const [items, setItems] = useState<number[]>([]);

	useEffect(() => {
		rpc.callServer('Vehicle-GetPassengers').then(setItems);
	}, []);

	async function kickPassenger(id: string) {
		await onClick(id);

		setItems(items.filter((item) => item !== +id));
	}

	return (
		<>
			{items.map((item) => (
				<Cell
					key={item}
					label="passengers"
					title={`Гражданин (${item})`}
					onClick={() => kickPassenger(item.toString())}
				/>
			))}
		</>
	);
}
