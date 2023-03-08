import React from 'react';
import classNames from 'classnames';

type Props = {
	children: string;
	className?: string;
};

export default function PhoneTitle({ children, className }: Props) {
	return <h2 className={classNames('phone_title', className)}>{children}</h2>;
}
