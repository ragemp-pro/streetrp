import React from 'react';
import moment from 'moment-timezone';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

type Props = {
	sender: string;
	message: string;
	time: string;
	onAccept: () => void;
};

export default function AdminReportsItem({ sender, message, time, onAccept }: Props) {
	return (
		<div className="admin_reports-item">
			<span className="admin_reports-sender">{sender}</span>
			<p className="admin_reports-message">{message}</p>

			<span className="admin_reports-time">{moment(time).format('DD.MM.YY, HH:mm')}</span>

			<button className="admin_reports-accept" onClick={onAccept}>
				<IoIosCheckmarkCircleOutline />
			</button>
		</div>
	);
}
