import React, { useState, useEffect } from 'react';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import rpc from 'utils/rpc';
import images from 'utils/images';

export default function Ammo() {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		rpc.register('HUD-SetAmmo', setCount);

		rpc.callClient('getCurrentAmmo').then(setCount);

		return () => {
			rpc.unregister('HUD-SetAmmo');
		};
	}, []);

	return count ? (
		<div className="hud_ammo">
			<AnimatedNumber
				className="hud_ammo-count"
				value={count}
				duration={200}
				formatValue={parseInt}
			/>

			<svg className="hud_ammo-icon">
				<use xlinkHref={`${images.getImage('ammo.svg')}#icon`} />
			</svg>
		</div>
	) : null;
}
