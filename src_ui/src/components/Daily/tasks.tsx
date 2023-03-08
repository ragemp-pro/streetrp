import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import tasks from 'data/tasks.json';

type Props = {
	items: {
		[name: string]: number[];
	};
};

export default function DailyTasks({ items }: Props) {
	return (
		<div className="daily_tasks">
			<PrimaryTitle className="daily_tasks-title">Ежедневные задания</PrimaryTitle>

			<div className="daily_tasks-container">
				<ul className="daily_tasks-items">
					{Object.entries(items).map(([item, points]) => (
						<li className="daily_tasks-item" key={item}>
							<span className="name">{(tasks as any)[item]}</span>

							<span className="points">
								{points[0]} / {points[1]}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
