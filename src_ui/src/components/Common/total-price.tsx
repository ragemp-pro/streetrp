import React from 'react';
import classNames from 'classnames';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import prettify from 'utils/prettify';

type Props = {
	value: number;
	formatter?: (value: number) => string;
	title?: string;
	className?: string;
	titleClassName?: string;
	valueClassName?: string;
};

export default function TotalPrice({
	value,
	formatter,
	title,
	className,
	titleClassName,
	valueClassName
}: Props) {
	return (
		<div className={classNames('total-price', className)}>
			<h4 className={classNames('total-price_title', titleClassName)}>
				{title || 'Итого:'}
			</h4>

			<AnimatedNumber
				className={classNames('total-price_value', valueClassName)}
				value={value}
				duration={300}
				formatValue={formatter ?? prettify.price}
			/>
		</div>
	);
}
