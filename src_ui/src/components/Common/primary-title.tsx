import React from 'react';
import classNames from 'classnames';

type Props = {
	children: string;
	className?: string;
};

export default function PrimaryTitle({ children, className }: Props) {
	return <h2 className={classNames('primary-title', className)}>{children}</h2>;
}
