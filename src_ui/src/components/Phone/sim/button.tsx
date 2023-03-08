import React from 'react';

type Props = {
	children: string;
	type?: 'submit' | 'button';
	onClick?: () => void;
};

export default function SimButton({ children, type, onClick }: Props) {
	return (
		<button className="sim_btn" type={type} onClick={onClick}>
			{children}
		</button>
	);
}
