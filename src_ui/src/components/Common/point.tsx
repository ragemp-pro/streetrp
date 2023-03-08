import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';

type Props = {
	className?: string;
	amount: number;
};

export default function Point({ amount, className }: Props) {
	return (
		<div className={classNames('point', className)}>
			<span>{prettify.price(amount).replace('$', '')}</span>

			<svg className="point-icon">
				<use xlinkHref={`${images.getImage('point.svg')}#icon`} />
			</svg>
		</div>
	);
}
