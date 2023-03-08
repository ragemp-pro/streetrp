import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

type Props = {
	name: string;
	selected: boolean;
	select: (name: string) => void;
};

export default function WallpaperItem({ name, selected, select }: Props) {
	return (
		<div
			className={classNames('settings_wallpaper-item', { active: selected })}
			onClick={() => select(name)}
		>
			<img src={images.getImage(`${name}_wp.jpg`, 'phone')} alt={name} />
		</div>
	);
}
