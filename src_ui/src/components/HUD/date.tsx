import React from 'react';
import moment from 'moment-timezone';

type Props = {
	value: string;
};

export default function Date({ value }: Props) {
	return (
		<div className="hud_date">
			<span className="hud_date-item hud_date-item--time">
				{moment(value).format('HH:mm')}
			</span>
			<span className="hud_date-item hud_date-item">
				{moment(value).format('DD.MM.YYYY')}
			</span>
		</div>
	);
}
