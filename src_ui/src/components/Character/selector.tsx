import React from 'react';
import Selector from 'components/Common/selector';

type Props = {
	title: string;
	items: number[] | string[];
	value: number | string;
	customValue?: string;
	onChange: (value: any) => void;
};

export default function CharacterSelector({
	title,
	items,
	value,
	customValue,
	onChange
}: Props) {
	return (
		<Selector
			className="character_selector"
			circleButton
			title={title}
			items={items}
			value={value}
			customValue={customValue}
			onChange={onChange}
		/>
	);
}
