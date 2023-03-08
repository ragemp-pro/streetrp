import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';
import images from 'utils/images';

type Props = {
	model: string;
};
type State = {
	tank: number;
	trunk: {
		cells: number;
		slots: number;
	};
};

export default function VehicleShopInfo({ model }: Props) {
	const [state, setState] = useState<State>({
		tank: 0,
		trunk: { cells: 0, slots: 0 }
	});

	useEffect(() => {
		rpc
			.callServer('Vehicle-GetInfo', model)
			.then(({ tank, trunk }: State) => setState({ tank, trunk }));
	}, [model]);

	return (
		<div className="vehicle-shop_info">
			<div className="vehicle-shop_info-item">
				<img src={images.getImage('trunk.svg')} alt="trunk" />

				<span className="vehicle-shop_info-value">
					<b>{state.trunk.slots}</b> кг
				</span>
			</div>

			<div className="vehicle-shop_info-item">
				<img src={images.getImage('tank.svg')} alt="tank" />

				<span className="vehicle-shop_info-value">
					<b>{state.tank}</b> л
				</span>
			</div>
		</div>
	);
}
