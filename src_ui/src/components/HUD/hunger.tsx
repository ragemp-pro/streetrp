import React from 'react';
import classNames from 'classnames';
import { FaHamburger } from 'react-icons/fa';

type Props = {
	amount: number;
};

export default function Hunger({ amount }: Props) {
	return (
		<div
			className={classNames(
				'hud_hunger',
				amount >= 50 ? 'high' : amount >= 20 ? 'medium' : 'low'
			)}
		>
			<FaHamburger />
		</div>
	);
}
