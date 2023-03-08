import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

type Props = {
	selected: string;
	category: string;
	selectItem: (name: string) => void;
};

const items: { [key: string]: string[] } = {
	melee: ['dagger', 'bat', 'bottle', 'golfclub', 'knuckle', 'knife'],
	handguns: [
		'pistol',
		'pistol50',
		'snspistol',
		'vintagepistol',
		'revolver',
		'doubleaction',
		'machinepistol',
		'microsmg',
		'minismg',
		'smg',
		'combatpdw',
		'assaultsmg'
	],
	rifles: [
		'compactrifle',
		'assaultrifle',
		'carbinerifle',
		'advancedrifle',
		'specialcarbine'
	],
	shotguns: [
		'sawnoffshotgun',
		'pumpshotgun',
		'assaultshotgun',
		'heavyshotgun',
		'musket',
		'dbshotgun'
	]
};

export default function WeaponsList({ category, selected, selectItem }: Props) {
	return (
		<div className="weapons_list">
			<div className="weapons_list-container">
				{items[category].map((item) => (
					<div
						className={classNames('weapons_list-item', { active: item === selected })}
						key={item}
						onClick={() => selectItem(item)}
					>
						<img src={images.getImage(`${item}.png`, 'inventory')} alt={item} />
					</div>
				))}
			</div>
		</div>
	);
}
