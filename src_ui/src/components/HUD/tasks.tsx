import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import tasks from 'data/tasks.json';

type Props = {
	items: string[];
};

export default function Tasks({ items }: Props) {
	return (
		<div className="hud_tasks">
			<ul className="hud_tasks-list">
				<TransitionGroup>
					{items.map((item) => (
						<CSSTransition key={item} timeout={300} classNames="alert">
							<li className="hud_tasks-item">{(tasks as any)[item]}</li>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ul>
		</div>
	);
}
