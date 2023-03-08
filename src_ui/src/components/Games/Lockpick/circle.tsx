import React from 'react';
import { Circle } from 'rc-progress';
import { random } from 'lodash';

type Props = {
	point: React.RefObject<HTMLDivElement>;
	pointer: React.RefObject<HTMLDivElement>;

	rotations: {
		point: number;
		pointer: number;
	};

	onClick: () => void;
};

export default function LockpickCircle({ point, pointer, rotations, onClick }: Props) {
	return (
		<div className="lockpick_circle" onClick={onClick}>
			<Circle
				className="lockpick_circle-progress"
				strokeWidth={3}
				trailWidth={3}
				trailColor="#fff"
				strokeColor="#ff0082"
				strokeLinecap="square"
			/>

			<div
				ref={point}
				className="lockpick_circle-point"
				style={{ transform: `rotate(${rotations.point}deg)` }}
			/>
			<div
				ref={pointer}
				className="lockpick_circle-pointer"
				style={{
					transform: `rotate(${rotations.pointer}deg)`,
					animationDuration: `${random(1.5, 2)}s`
				}}
			/>
		</div>
	);
}
