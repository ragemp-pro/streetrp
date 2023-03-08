import React from 'react';
import Slider from 'rc-slider';

type Props = {
	title: string;
	value: number;
	min: number;
	max: number;
	step?: number;
	onChange: (value: number) => void;
};

export default function CharacterSlider({
	title,
	value,
	min,
	max,
	step,
	onChange
}: Props) {
	return (
		<div className="character_slider">
			<h4 className="character_param-title">{title}</h4>

			<Slider value={value} min={min} max={max} step={step} onChange={onChange} />
		</div>
	);
}
