import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import images from 'utils/images';

export const items: { [name: string]: string } = {
	repair: 'Ремонт',
	engine: 'Двигатель',
	transmission: 'Трансмиссия',
	brakes: 'Тормоза',
	turbo: 'Турбонаддув',
	suspension: 'Подвеска',
	engine_sound: 'Звук двигателя',
	horn: 'Клаксон',
	tint: 'Тонировка',
	plate: 'Номер',
	lights: 'Фары',
	neon: 'Неон',
	paint: 'Покраска',
	rims: 'Диски',
	spoiler: 'Спойлер',
	front_bumper: 'Перед. бампер',
	rear_bumper: 'Зад. бампер',
	hood: 'Капот',
	sideskirt: 'Пороги',
	roof: 'Крыша',
	exhaust: 'Выхлоп',
	grille: 'Решётка',
	frame: 'Каркас',
	livery: 'Винилы'
};

type Props = {
	current?: string;
	offset: number;
	open: (name: string) => void;
	onScroll: (position: number) => void;
};

export default function LscCategories({ current, open, offset, onScroll }: Props) {
	const list = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (list.current && offset) list.current.scrollTo(offset, 0);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function onMouseWheel(event: React.WheelEvent<HTMLUListElement>) {
		if (!list.current) return;

		const currentScrollDelta = list.current.scrollLeft;

		list.current.scrollTo(currentScrollDelta + event.deltaY, 0);

		onScroll(list.current.scrollLeft);
	}

	return (
		<div className="lsc_categories">
			<ul ref={list} className="lsc_categories-list" onWheel={onMouseWheel}>
				{Object.entries(items).map(([key, name]) => (
					<li
						className={classNames('lsc_categories-item', { active: current === key })}
						key={key}
						onClick={() => open(key)}
					>
						<img src={images.getImage(`${key}.svg`, 'lsc')} alt={name} />

						<h3 className="lsc_categories-title">{name}</h3>
					</li>
				))}
			</ul>
		</div>
	);
}
