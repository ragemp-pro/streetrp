import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import rpc from 'utils/rpc';
import { IoIosMic, IoIosMicOff } from 'react-icons/io';
import Key from './key';

export default function Main({ bind }: { bind: string }) {
	const [status, setStatus] = useState<boolean>(false);

	useEffect(() => {
		rpc.register('HUD-SetMicStatus', setStatus);

		return () => {
			rpc.unregister('HUD-SetMicStatus');
		};
	}, []);

	return (
		<div className={classNames('hud_mic', { active: status })}>
			<Key pressed={status}>{bind ?? 'Z'}</Key>
			{status ? <IoIosMic /> : <IoIosMicOff />}
		</div>
	);
}
