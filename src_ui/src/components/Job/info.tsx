import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';

type Props = {
	description: string;
	requirements: string;
};

export default function JobInfo({ description, requirements }: Props) {
	return (
		<div className="job_info">
			<PrimaryTitle className="job_info-title">Информация</PrimaryTitle>

			<p className="job_info-requirements">
				Требования: <strong>{requirements}</strong>.
			</p>

			<div className="job_info-descr">
				{description.split('\n').map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
		</div>
	);
}
