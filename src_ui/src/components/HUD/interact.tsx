import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';

export default function Interact() {
	const [key, setKey] = useState<string>();

	useEffect(() => {
		rpc.register('HUD-ShowInteract', (data) => setKey(data));

		return () => {
			rpc.unregister('HUD-ShowInteract');
		};
	}, [key]);

	return key ? (
		<div className="hud_interact">
			<span className="hud_interact-key">{key}</span>

			<span className="hud_interact-action">Взаимодействие</span>
		</div>
	) : null;
}
