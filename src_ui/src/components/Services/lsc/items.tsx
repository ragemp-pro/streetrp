import React, { useRef } from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';

type Props = {
	category: string;
	items: string[];
	prices: number[];
	select: (id: number) => void;
	installed: number;
	selected?: number;
};

export default function LscItems({
	category,
	items,
	prices,
	installed,
	selected,
	select
}: Props) {
	const list = useRef<HTMLUListElement>(null);

	function onMouseWheel(event: React.WheelEvent<HTMLUListElement>) {
		if (!list.current) return;

		const currentScrollDelta = list.current.scrollLeft;

		list.current.scrollTo(currentScrollDelta + event.deltaY, 0);
	}

	return (
		<div className="lsc_items">
			<ul ref={list} className="lsc_items-list" onWheel={onMouseWheel}>
				{items.map((item, index) => (
					<li
						className={classNames('lsc_items-item', {
							disabled: index - 1 === installed,
							active: selected === index
						})}
						key={item}
						onClick={() => select(index)}
					>
						<img src={images.getImage(`${category}.svg`, 'lsc')} alt={item} />

						<h3 className="lsc_items-title">
							{item === 'default'
								? 'Стандарт.'
								: item === 'custom'
								? `Вариант ${index}`
								: item}
						</h3>

						<span className="lsc_items-price">
							{prettify.price(prices[index] ?? prices[0])}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
