import React from 'react';
import classNames from 'classnames';

type Props = {
	pages: number;
	current: number;
	selectPage: (index: number) => void;
};

export default function PhonePagination({ pages, current, selectPage }: Props) {
	return (
		<div className="phone_pagination">
			<ul className="phone_pagination-list">
				{[...Array(pages).keys()].map((item) => (
					<li
						key={item}
						className={classNames('phone_pagination-item', { active: current === item })}
						onClick={() => selectPage(item)}
					>
						{item + 1}
					</li>
				))}
			</ul>
		</div>
	);
}
