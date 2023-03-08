import React from 'react';

type Props = {
	children: string;
};

export default function BankTitle({ children }: Props) {
	return <h2 className="bank_title">{children}</h2>;
}
