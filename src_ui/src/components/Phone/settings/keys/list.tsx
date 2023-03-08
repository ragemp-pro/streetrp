import React from 'react';
import Navigation from '../../partials/navigation';
import Group from '../../partials/group';
import Button from '../../partials/button';

const items: string[] = [
	'F2',
	'F3',
	'F4',
	'F5',
	'F6',
	'F7',
	'F8',
	'F9',
	'F10',
	'F12',
	'`',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'-',
	'=',
	'Tab',
	'Q',
	'W',
	'Y',
	'U',
	'I',
	'O',
	'[',
	']',
	'Caps lock',
	'A',
	'S',
	'D',
	'H',
	'J',
	'K',
	'L',
	';',
	"'",
	'Shift',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	',',
	'.',
	'/',
	'Ctrl',
	'Alt',
	'Left',
	'Up',
	'Down',
	'Right',
	'Insert',
	'Home',
	'Delete',
	'Page up',
	'Page down',
	'End'
];

type Props = {
	name: string;
	current: string;
	selectKey: (keyName: string) => void;
	close: () => void;
};

export default function KeysList({ name, current, selectKey, close }: Props) {
	return (
		<div className="settings_keys-list">
			<Navigation title={name} close={{ title: '', onClick: close }} />

			<Group className="maps_list">
				{items.map((item, index) => (
					<Button
						icon={current === item ? 'check' : undefined}
						key={index}
						onClick={() => selectKey(item)}
					>
						{item}
					</Button>
				))}
			</Group>
		</div>
	);
}
