import React from 'react';

type Props = {
	title: string;
	value: string;
};

export default function BankInfoItem({ title, value }: Props) {
	return (
		<div className="bank_info-item">
			<h3 className="title">{title}</h3>

			<span className="value">{value}</span>
		</div>
	);
}
