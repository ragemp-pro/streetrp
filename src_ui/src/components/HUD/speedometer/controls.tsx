import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import Key from '../key';

type Props = {
	cruise: boolean;
	engine: boolean;
	lock: boolean;
	seatbelt: boolean;
	binds: {
		[name: string]: string;
	};
};

const items = {
	cruise: 'X',
	engine: 'Alt',
	lock: 'L',
	seatbelt: 'G'
};

export default function SpeedometerControls(props: Props) {
	return (
		<div className="speedometer_controls">
			{Object.entries(items).map(([name, title]) => (
				<div
					key={name}
					className={classNames('speedometer_controls-item', {
						active: (props as any)[name]
					})}
				>
					<svg className="icon">
						<use xlinkHref={`${images.getImage(`${name}.svg`)}#icon`} />
					</svg>

					<Key>{props.binds[name] ?? title}</Key>
				</div>
			))}
		</div>
	);
}
