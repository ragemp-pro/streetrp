import React, { useState } from 'react';
import { IoIosLock, IoIosUnlock } from 'react-icons/io';
import sound from 'assets/audio/lock.mp3';

type Props = {
	status: boolean;
	toggle: () => Promise<void>;
};

export default function HousePadlock({ status, toggle }: Props) {
	const [audio] = useState(new Audio(sound));

	function toggleLock() {
		toggle().then(() => audio.play());
	}

	return (
		<div className="house_padlock" onClick={toggleLock}>
			<div className="house_padlock-icon">{status ? <IoIosLock /> : <IoIosUnlock />}</div>

			<p className="house_padlock-remark">
				Нажмите на замок, чтобы {status ? 'открыть' : 'закрыть'} дом
			</p>
		</div>
	);
}
