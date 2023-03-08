import React from 'react';
import {
	IoIosMicOff,
	IoIosKeypad,
	IoIosAdd,
	IoIosPeople,
	IoIosCall
} from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	callTime?: string;
	isRecieveCall: boolean;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'mic',
		label: 'Откл. звук',
		icon: IoIosMicOff
	},
	{
		name: 'keypad',
		label: 'Клавиши',
		icon: IoIosKeypad
	},
	{
		name: 'add',
		label: 'Добавить',
		icon: IoIosAdd
	},
	{
		name: 'contacts',
		label: 'Контакты',
		icon: IoIosPeople
	},
	{
		name: 'decline',
		label: 'Отклонить',
		icon: IoIosCall
	}
];

export default function OutgoingCall({ name, isRecieveCall, onControlClick }: Props) {
	return (
		<div className="call_outgoing">
			<Info
				name={name}
				status={isRecieveCall ? 'идет разговор' : 'вызов на сотовый...'}
			/>

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
