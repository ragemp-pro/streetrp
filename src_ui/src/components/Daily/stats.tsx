import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import Point from 'components/Common/point';

type Props = {
	money: number;
	level: number;
	experience: [number, number];
};

export default function DailyStats({ money, level, experience }: Props) {
	return (
		<div className="daily_stats">
			<PrimaryTitle className="daily_stats-title">Статистика</PrimaryTitle>

			<div className="daily_stats-container">
				<Point className="daily_stats-money" amount={money} />

				<div className="daily_stats-experience">
					<h4 className="title">Опыт</h4>

					<div className="progress">
						<div className="progress_bar">
							<div
								className="progress_bar-fill"
								style={{ width: `${(experience[0] * 100) / experience[1]}%` }}
							/>
						</div>

						<div className="progress_points">
							{experience[0]} / {experience[1]}
						</div>
					</div>
				</div>

				<div className="daily_stats-level">
					<h4 className="title">Уровень</h4>

					<span className="current">{level}</span>
				</div>
			</div>
		</div>
	);
}
