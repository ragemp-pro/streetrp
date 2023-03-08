import React from 'react';

type Props = {
	title: string;
	value: string;
};

export default function FactionDocsField({ title, value }: Props) {
	return (
		<div className="faction-docs_field">
			<h4 className="faction-docs_field-title">{title}</h4>
			<span className="faction-docs_field-value">{value}</span>
		</div>
	);
}
