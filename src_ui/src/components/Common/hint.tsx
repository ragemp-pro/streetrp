import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const icons = {
	click: 'mouse-left',
	drag: 'mouse-drag',
	exit: 'esc-key'
};

type Props = {
	className?: string;
	action: keyof typeof icons;
	children: string;
};

export default function Hint({ className, action, children }: Props) {
	return (
		<div className={classNames('hint', className)}>
			<img
				className="hint_icon"
				src={images.getImage(`${icons[action]}.svg`)}
				alt={icons[action]}
			/>

			<span className="hint_text">{children}</span>
		</div>
	);
}
