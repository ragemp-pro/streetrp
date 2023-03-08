import React from 'react';
import { FaGasPump } from 'react-icons/fa';
import { Circle } from 'rc-progress';

export default function Fuel({ amount }: { amount: number }) {
	return (
		<div className="speedometer_fuel">
			<FaGasPump className="speedometer_fuel-icon" />

			<Circle
				className="speedometer_fuel-fill"
				strokeWidth={3}
				trailWidth={3}
				trailColor="rgba(255,255,255, 0.5)"
				strokeColor="#ff0082"
				percent={amount}
				gapDegree={225}
				gapPosition="bottom"
				strokeLinecap="square"
			/>
		</div>
	);
}
