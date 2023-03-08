import React from 'react';

type Props = {
	children: string;
};

export default function SupermarketHint({ children }: Props) {
	return <p className="supermarket_hint">{children}</p>;
}
