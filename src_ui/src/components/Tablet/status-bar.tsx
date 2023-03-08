import React from 'react';
import moment from 'moment-timezone';
import { IoWifi, IoBatteryFull, IoNavigateOutline } from 'react-icons/io5';

type Props = {
	date: string;
};

export default function StatusBar({ date }: Props) {
	return (
		<div className="tablet_status-bar">
			<span className="time">{moment(date).format('hh:mm, dddd, DD MMMM')}</span>

			<div className="icons">
				<div className="icons_item icons_item--wifi">
					<IoWifi />
				</div>

				<div className="icons_item icons_item--navigate">
					<IoNavigateOutline />
				</div>

				<div className="icons_item icons_item--battery">
					<IoBatteryFull />
				</div>
			</div>
		</div>
	);
}
