import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';
import images from 'utils/images';

const items: { [name: string]: string } = {
	speed: 'Скорость',
	acceleration: 'Ускорение',
	brakes: 'Торможение',
	clutch: 'Управление'
};

type Props = {
	model: string;
};
type State = {
	speed: number;
	acceleration: number;
	brakes: number;
	clutch: number;
};

export default function VehicleShopSpec({ model }: Props) {
	const [state, setState] = useState<State>({
		speed: 0,
		acceleration: 0,
		brakes: 0,
		clutch: 0
	});

	useEffect(() => {
		rpc.callClient('Vehicle-GetSpec', model).then((data: State) => setState(data));
	}, [model]);

	return (
		<div className="vehicle-shop_spec">
			{Object.entries(state).map(([name, value]) => (
				<div className="vehicle-shop_spec-item" key={name}>
					<img src={images.getImage(`${name}.svg`)} alt={name} />

					<div className="bar">
						<div className="bar_container">
							{[...Array(4).keys()].map((item) => (
								<progress
									className="bar_part"
									key={item}
									value={value <= item * 25 ? 0 : value}
									max={(item + 1) * 25}
								/>
							))}
						</div>

						<h4 className="bar_title">{items[name]}</h4>
					</div>
				</div>
			))}
		</div>
	);
}
