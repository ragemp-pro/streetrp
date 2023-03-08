import React from 'react';
import classNames from 'classnames';

type Props = {
	children: string;
	pressed?: boolean;
};

export default function HUDKey({ children, pressed }: Props) {
	return <div className={classNames('hud_key', { active: pressed })}>{children}</div>;
}
