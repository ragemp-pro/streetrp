import React from 'react';

type Props = {
	firstName: string;
	lastName: string;
};

export default function BankInfoName({ firstName, lastName }: Props) {
	return (
		<div className="bank_info-name">
			<span className="initials">
				{firstName[0]}
				{lastName[0]}
			</span>

			<div className="fullname">
				<span>{firstName}</span> <span>{lastName}</span>
			</div>
		</div>
	);
}
