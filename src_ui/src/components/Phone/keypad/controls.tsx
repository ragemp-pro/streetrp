import React from 'react';
import { IoIosCall, IoIosBackspace } from 'react-icons/io';

type Props = {
	phoneNumber: string;
	callNumber: () => void;
	deleteFromNumber: () => void;
};

export default function KeypadControls({
	phoneNumber,
	callNumber,
	deleteFromNumber
}: Props) {
	return (
		<div className="phone_keypad-controls">
			<button className="phone_keypad-submit" onClick={callNumber}>
				<i className="icon">
					<IoIosCall />
				</i>
			</button>

			{phoneNumber.length ? (
				<button className="phone_keypad-delete" onClick={deleteFromNumber}>
					<IoIosBackspace />
				</button>
			) : null}
		</div>
	);
}
