import React from 'react';
import Point from 'components/Common/point';

type Props = {
	current: number;
};

export default function DonationBalance({ current }: Props) {
	return (
		<div className="donation_balance">
			<h3 className="donation_balance-title">Баланс</h3>

			<Point className="donation_balance-current" amount={current} />
		</div>
	);
}
