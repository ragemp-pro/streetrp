import React from 'react';

type Props = {
	name: string;
	status: string;
};

export default function CallInfo({ name, status }: Props) {
	return (
		<div className="call_info">
			<p className="name">{name}</p>
			<span>{status}</span>
		</div>
	);
}
