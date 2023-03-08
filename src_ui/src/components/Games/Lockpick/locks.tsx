import React from 'react';
import classNames from 'classnames';
import { IoIosLock, IoIosUnlock } from 'react-icons/io';

type Props = {
	amount: number;
	opened: number;
};

export default function LockpickLocks({ amount, opened }: Props) {
	return (
		<div className="lockpick_locks">
			<ul className="lockpick_locks-list">
				{[...Array(amount).keys()].map((item, index) => (
					<li
						key={item}
						className={classNames('lockpick_locks-item', { active: opened > index })}
					>
						{opened > index ? <IoIosUnlock /> : <IoIosLock />}
					</li>
				))}
			</ul>
		</div>
	);
}
