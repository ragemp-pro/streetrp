import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Props = {
	list: React.RefObject<HTMLDivElement>;
};

export default function LicensesScroll({ list }: Props) {
	function scroll(isForward: boolean) {
		if (!list.current) return;

		const size = (list.current.scrollWidth * 30) / 100;
		const currentPos = list.current.scrollLeft;
		const futurePos = size + currentPos;

		list.current.scrollTo({
			left: isForward ? futurePos : -futurePos,
			behavior: 'smooth'
		});
	}

	return (
		<div className="licenses_scroll">
			<button className="licenses_scroll-btn" onClick={() => scroll(false)}>
				<FaChevronLeft />
			</button>

			<button className="licenses_scroll-btn" onClick={() => scroll(true)}>
				<FaChevronRight />
			</button>
		</div>
	);
}
