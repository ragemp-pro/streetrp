import React from 'react';
import rpc from 'utils/rpc';
import classNames from 'classnames';

type Props = {
	children: string | JSX.Element;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	disabled?: boolean;
	form?: string;
	isClose?: boolean;
	onClick?: () => void;
};

export default function OutlineButton({
	children,
	type,
	disabled,
	form,
	className,
	isClose,
	onClick
}: Props) {
	return (
		<button
			className={classNames('outline-btn', className)}
			type={type}
			form={form}
			onClick={isClose ? () => rpc.callClient('Browser-HidePage') : onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
