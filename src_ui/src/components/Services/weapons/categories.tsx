import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const items: { [name: string]: { title: string; gauge?: string } } = {
	melee: {
		title: 'Ближний бой'
	},
	handguns: {
		title: 'Пистолеты',
		gauge: 'Малый калибр'
	},
	rifles: {
		title: 'Винтовки',
		gauge: 'Крупный калибр'
	},
	shotguns: {
		title: 'Дробовики',
		gauge: 'Дробь'
	}
};

type Props = {
	current: string;
	select: (name: string) => void;
};

export default function WeaponsCategories({ current, select }: Props) {
	return (
		<div className="weapons_categories">
			{Object.entries(items).map(([name, { title, gauge }]) => (
				<div
					className={classNames('weapons_categories-item', { active: current === name })}
					key={name}
					onClick={() => select(name)}
				>
					<h3 className="weapons_categories-title">{title}</h3>

					<div className="container">
						<img src={images.getImage(`${name}.svg`)} alt={title} />

						<span className="weapons_categories-gauge">{gauge}</span>
					</div>
				</div>
			))}
		</div>
	);
}
