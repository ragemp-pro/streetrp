import React from 'react';
import classNames from 'classnames';
import PrimaryTitle from 'components/Common/primary-title';

type Props = {
	open: (name: string) => void;
	items: { [name: string]: string };
	current: string;
};

export default function CharacterPage({ items, current, open }: Props) {
	return (
		<div className="character_page">
			<PrimaryTitle className="character_page-title">{items[current]}</PrimaryTitle>

			<div className="character_breadcrumbs">
				{Object.keys(items).map((page) => (
					<div
						className={classNames('character_breadcrumbs-item', {
							active: page === current
						})}
						key={page}
						onClick={() => open(page)}
					/>
				))}
			</div>
		</div>
	);
}
