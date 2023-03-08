import React from 'react';
import images from 'utils/images';

type Props = {
	label: string;
	title: string;
	onClick: () => void;
};

export default function TargetCell({ title, label, onClick }: Props) {
	function onHover(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const { parentElement } = event.currentTarget;

		if (parentElement) parentElement.classList.toggle('hover');
	}

	return (
		<li className="target-menu_cells-item disabled">
			<div
				className="container"
				onMouseEnter={onHover}
				onMouseLeave={onHover}
				onClick={onClick}
			>
				<img src={images.getImage(`${label}.svg`)} alt={title} />

				<span>{title}</span>
			</div>
		</li>
	);
}
