import React from 'react';

type Props = {
	addToNumber: (key: string) => void;
};

export default function KeypadList({ addToNumber }: Props) {
	return (
		<ul className="phone_keypad-list">
			{[...Array(10)].map((value, index) => (
				<li
					className="phone_keypad-item"
					key={index}
					onClick={() => addToNumber(index.toString())}
				>
					{index}
				</li>
			))}
		</ul>
	);
}
