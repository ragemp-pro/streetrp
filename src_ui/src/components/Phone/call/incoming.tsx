import React from 'react';
import { IoIosAlarm, IoIosText, IoIosCall } from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'remember',
		label: 'Напомнить',
		icon: IoIosAlarm
	},
	{
		name: 'message',
		label: 'Сообщение',
		icon: IoIosText
	},
	{
		name: 'decline',
		label: 'Отклонить',
		icon: IoIosCall
	},
	{
		name: 'accept',
		label: 'Ответить',
		icon: IoIosCall
	}
];

export default function IncomingCall({ name, onControlClick }: Props) {
	return (
		<div className="call_incoming">
			<Info status="сотовый" name={name} />

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
