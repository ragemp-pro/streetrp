import React from 'react';
import moment from 'moment-timezone';
import { IoBatteryFull, IoCellular } from 'react-icons/io5';

type Props = {
	date: string;
};

export default function StatusBar({ date }: Props) {
	return (
		<div className="phone_status-bar">
			<span className="time">{moment(date).format('HH:mm')}</span>

			<div className="icons">
				<IoCellular />
				<IoBatteryFull />
			</div>
		</div>
	);
}
