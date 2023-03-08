import React from 'react';
import moment from 'moment-timezone';

const actions: { [name: string]: string } = {
	ban: 'Бан',
	unban: 'Разбан',
	kick: 'Кик',
	demorgan: 'Деморган',
	prison_release: 'Освобождение',
	house_add: 'Дом +',
	house_delete: 'Дом -',
	vehicle_create: 'ТС +',
	money: 'Валюта',
	skin: 'Скин',
	notify: 'Уведомление'
};

type Props = {
	admin: string;
	action: string;
	message: string;
	time: string;
};

export default function AdminReportsItem({ admin, action, message, time }: Props) {
	return (
		<div className="admin_reports-item">
			<span className="admin_reports-sender">{admin}</span>
			<p className="admin_reports-message">{message}</p>

			<span className="admin_reports-time">
				<strong>{actions[action]} | </strong> {moment(time).format('DD.MM.YY, HH:mm')}
			</span>
		</div>
	);
}
