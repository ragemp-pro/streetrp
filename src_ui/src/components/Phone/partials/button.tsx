import React from 'react';
import classNames from 'classnames';
import { IoIosArrowForward } from 'react-icons/io';
import { MdCheck } from 'react-icons/md';

type Props = {
	children: string | JSX.Element[];
	className?: string;
	current?: string;
	icon?: 'arrow' | 'check';
	color?: 'red' | 'blue';
	onClick?: () => void;
};

export default function CustomButton({
	children,
	className,
	current,
	icon,
	color,
	onClick
}: Props) {
	return (
		<div
			className={classNames(
				'phone_button',
				className,
				color && `phone_button--${color}`,
				{
					'phone_button--disabled': !onClick
				}
			)}
			onClick={onClick}
		>
			{children}

			<span className="phone_button-selected">{current}</span>

			{icon && (
				<span className={classNames('phone_button-icon', `phone_button-icon--${icon}`)}>
					{icon === 'arrow' ? <IoIosArrowForward /> : <MdCheck />}
				</span>
			)}
		</div>
	);
}
