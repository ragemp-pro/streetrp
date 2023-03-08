import React from 'react';
import { Circle } from 'rc-progress';
import images from 'utils/images';

export default function Engine({ health }: { health: number }) {
	return (
		<div className="speedometer_engine">
			<svg className="speedometer_engine-icon">
				<use xlinkHref={`${images.getImage('engine.svg')}#icon`} />
			</svg>

			<Circle
				className="speedometer_engine-fill"
				strokeWidth={3}
				trailWidth={3}
				trailColor="rgba(255,255,255, 0.5)"
				strokeColor="#d257d6"
				percent={health}
				gapDegree={225}
				gapPosition="bottom"
				strokeLinecap="square"
			/>
		</div>
	);
}
