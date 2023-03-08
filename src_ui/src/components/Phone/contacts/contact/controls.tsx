import React from 'react';
import { IconType } from 'react-icons/lib/cjs';
import { IoIosText, IoIosCall, IoIosMail } from 'react-icons/io';

type ControlItem = {
	label: string;
	icon: IconType;
};

type Props = {
	onClick: (type: string) => void;
};

const controls: { [key: string]: ControlItem } = {
	message: {
		label: 'Написать',
		icon: IoIosText
	},
	call: {
		label: 'Сотовый',
		icon: IoIosCall
	},
	mail: {
		label: 'E-mail',
		icon: IoIosMail
	}
};

export default function ContactControls({ onClick }: Props) {
	return (
		<div className="controls">
			{Object.entries(controls).map(([type, item]) => (
				<button className="controls_item" key={type} onClick={() => onClick(type)}>
					<i className="icon">{React.createElement(item.icon)}</i>
					{item.label}
				</button>
			))}
		</div>
	);
}
