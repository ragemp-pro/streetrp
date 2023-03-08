import React, { useState, useEffect } from 'react';
import { Circle } from 'rc-progress';
import Selector from 'components/Common/selector';

type Props = {
	current: number;
	progress: number;
	selectLeveL: (level: number) => void;
};

export default function JobLevel({ current, progress, selectLeveL }: Props) {
	const [levels, setLevels] = useState<number[]>([]);

	useEffect(() => {
		if (current > levels.length) setLevels([...Array(current + 1).keys()]);
	}, [current, levels.length]);

	return (
		<div className="job_level">
			<div className="job_level-current">
				<Selector
					className="job_selector"
					items={levels}
					value={current}
					customValue={`${current + 1}`}
					onChange={selectLeveL}
				/>

				<span>уровень</span>
			</div>

			<Circle
				className="job_level-progress"
				strokeWidth={4}
				trailWidth={4}
				trailColor="#fff"
				strokeColor="#ff0082"
				strokeLinecap="square"
				percent={progress}
			/>
		</div>
	);
}
