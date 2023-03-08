import React from 'react';
import classNames from 'classnames';

type Props = {
	children: any;
	className?: string;
};

export default function ItemsGroup({ children, className }: Props) {
	return <div className={classNames('phone_items-group', className)}>{children}</div>;
}
