import React from 'react';
import classNames from 'classnames';

type Props = {
	children: string;
	type?: 'button' | 'submit' | 'reset';
	color?: 'green' | 'orange' | 'purple';
	className?: string;
	disabled?: boolean;
	form?: string;
	onClick?: () => void;
};

export default function GradientButton({
	color = 'orange',
	children,
	type,
	disabled,
	form,
	className,
	onClick
}: Props) {
	return (
		<button
			className={classNames('gradient-btn', className, `gradient-btn--${color}`)}
			type={type}
			form={form}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
