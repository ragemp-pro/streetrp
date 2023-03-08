import React from 'react';

type Props = {
	title: string;
	children: string;
};

const BusinessInfoItem = ({ title, children }: Props) => {
	return (
		<div className="business_info-item">
			<h4 className="business_info-name">{title}</h4>
			<span className="business_info-value">{children}</span>
		</div>
	);
};

export default BusinessInfoItem;
