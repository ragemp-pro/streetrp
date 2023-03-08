import React from 'react';
import classNames from 'classnames';
import { IconType } from 'react-icons/lib/cjs';

type Control = {
	name: string;
	label: string;
	icon: IconType;
};

type Props = {
	items: Control[];
	onClick: (type: string) => void;
};

export default function CallControls({ items, onClick }: Props) {
	return (
		<div className="call_controls">
			{items.map((item) => (
				<button
					className={classNames('call_controls-item', `call_controls-item--${item.name}`)}
					key={item.name}
					onClick={() => onClick(item.name)}
				>
					<i className="icon">{React.createElement(item.icon)}</i>
					{item.label}
				</button>
			))}
		</div>
	);
}
