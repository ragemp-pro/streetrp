import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { FaUniversity } from 'react-icons/fa';
import prettify from 'utils/prettify';

type Props = {
	cash: number;
	bank: number;
};

type Change = {
	type: 'bank' | 'cash';
	amount: number;
	status: boolean;
};

function usePrevious(value: Props) {
	const ref = useRef<Props>();

	useEffect(() => {
		ref.current = value;
	});

	return ref.current;
}

function MoneyChange({ status, amount }: { status: boolean; amount: number }) {
	return (
		<span className={classNames('hud_money-change', status ? 'positive' : 'negative')}>
			{`${status ? '+' : ''}${prettify.price(amount).replace('$', '')}`}
		</span>
	);
}

export default function Money({ cash, bank }: Props) {
	const prevMoney = usePrevious({ cash, bank });
	const [changes, setChanges] = useState<Change>();

	useEffect(() => {
		if (!prevMoney) return;

		if (prevMoney && prevMoney.cash !== cash)
			setChanges({
				type: 'cash',
				amount: cash - prevMoney.cash,
				status: cash > prevMoney.cash
			});

		if (prevMoney && prevMoney.bank !== bank)
			setChanges({
				type: 'bank',
				amount: bank - prevMoney.bank,
				status: bank > prevMoney.bank
			});

		setTimeout(() => setChanges(undefined), 2000);
	}, [cash, bank, prevMoney]);

	return (
		<div className="hud_money">
			<p className="hud_money-item">
				{prettify.price(cash)}

				{changes?.type === 'cash' && (
					<MoneyChange status={changes.status} amount={changes.amount} />
				)}
			</p>

			<p className="hud_money-item">
				<FaUniversity />
				{prettify.price(bank)}

				{changes?.type === 'bank' && (
					<MoneyChange status={changes.status} amount={changes.amount} />
				)}
			</p>
		</div>
	);
}
