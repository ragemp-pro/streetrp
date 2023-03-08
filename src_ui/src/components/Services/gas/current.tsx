import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';

type Props = {
	type: string;
	percent: number;
};

const types: { [name: string]: string } = {
	diesel: 'Diesel',
	low: 'A95',
	mid: 'A98'
};

export default function GasCurrent({ type, percent }: Props) {
	return (
		<div className="gas_current">
			<PrimaryTitle className="gas_current-title">Информация</PrimaryTitle>

			<div className="gas_current-container">
				<div className="gas_current-fill" style={{ height: `${percent}%` }} />

				<span className="gas_current-percent">{Math.round(percent)}%</span>

				<div className="gas_current-type">
					<h4>Тип топлива</h4>
					<span>{types[type]}</span>
				</div>
			</div>
		</div>
	);
}
