import React from 'react';
import classNames from 'classnames';
import PrimaryTitle from 'components/Common/primary-title';

type Props = {
	items: number[];
	current: number;
};

export default function DailyBonus({ items, current }: Props) {
	return (
		<div className="daily_bonus">
			<PrimaryTitle className="daily_bonus-title">Ежедневный бонус</PrimaryTitle>

			<div className="daily_bonus-items">
				<h4 className="title">День</h4>

				<ul>
					{items.map((item, index) => (
						<li key={index} className={classNames({ active: current === index })}>
							<div className="description">{item}$</div>

							<span className="day">{index + 1}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
