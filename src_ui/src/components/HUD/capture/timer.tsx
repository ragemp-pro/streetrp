import React from 'react';
import { Circle } from 'rc-progress';
import { FaRegClock } from 'react-icons/fa';

type Props = {
	current: number;
	max: number;
};

export default function CaptureTimer({ current, max }: Props) {
	function secondsToTime(sec: number) {
		const m = Math.floor((sec % 3600) / 60)
			.toString()
			.padStart(2, '0');
		const s = Math.floor(sec % 60)
			.toString()
			.padStart(2, '0');

		return `${m}:${s}`;
	}

	return (
		<div className="capture_timer">
			<div className="capture_timer-circle">
				<Circle
					className="capture_timer-progress"
					strokeWidth={10}
					trailWidth={10}
					trailColor="#5D5D64"
					strokeColor="#fcda3f"
					strokeLinecap="square"
					percent={(current * 100) / max}
				/>

				<FaRegClock className="capture_timer-icon" />
			</div>

			<span className="capture_timer-current">{secondsToTime(current)}</span>
		</div>
	);
}
