import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

type Props = {
	items: {
		[name: string]: string;
	};
	selected: string;
	select: (name: string) => void;
};

export default function CharacterOptions({ items, selected, select }: Props) {
	return (
		<div className="character_options">
			<ul className="character_options-list">
				{Object.entries(items).map(([name, title]) => (
					<li
						className={classNames('character_options-item', {
							active: name === selected
						})}
						key={name}
						onClick={() => select(name)}
					>
						<div className="icon">
							<img src={images.getImage(`${name}.svg`)} alt={title} />
						</div>

						<span>{title}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
