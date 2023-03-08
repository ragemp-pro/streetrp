import React from 'react';
import { Circle } from 'rc-progress';

type Props = {
	amount: number;
};

export default function RPM({ amount }: Props) {
	return (
		<div className="speedometer_rpm">
			<Circle
				className="speedometer_rpm-fill"
				strokeWidth={3}
				trailWidth={3}
				trailColor="rgba(255,255,255, 0.5)"
				strokeColor={amount > 90 ? '#d40000' : '#fce638'}
				percent={amount}
				gapDegree={120}
				gapPosition="bottom"
				strokeLinecap="square"
			/>

			<Circle
				className="speedometer_rpm-fill"
				strokeWidth={3}
				trailWidth={3}
				trailColor="rgba(255,255,255, 0.5)"
				strokeColor={amount > 90 ? '#d40000' : '#fce638'}
				percent={amount}
				gapDegree={120}
				gapPosition="bottom"
				strokeLinecap="square"
			/>
		</div>
	);
}
