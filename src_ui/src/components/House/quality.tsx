import React from 'react';
import classNames from 'classnames';
import { FaStar, FaRegStar } from 'react-icons/fa';

type Props = {
	type: string;
};

const types = ['low', 'average', 'premium'];

export default function HouseQuality({ type }: Props) {
	const level = types.indexOf(type.split('_')[0]);

	return (
		<div className="house_quality">
			{types.map((item, index) => (
				<div
					key={item}
					className={classNames('house_quality-item', { disabled: level < index })}
				>
					{level >= index ? <FaStar /> : <FaRegStar />}
				</div>
			))}
		</div>
	);
}
