import React from 'react';
import images from 'utils/images';
import PrimaryTitle from 'components/Common/primary-title';
import Padlock from './padlock';

type Props = {
	index: number;
	locked: boolean;
	inventory: number;
	vehicles: number;
	toggleLock: () => Promise<void>;
};

export default function HouseMain({
	index,
	locked,
	inventory,
	vehicles,
	toggleLock
}: Props) {
	return (
		<div className="house_main">
			<PrimaryTitle className="house_main-title">{`Дом ${index}`}</PrimaryTitle>

			<Padlock status={locked} toggle={toggleLock} />

			<div className="house_options">
				<div className="house_options-item">
					<img src={images.getImage('safe.svg')} alt="safe" />

					{inventory > 0 ? (
						<span>
							Сейф на <b>{inventory}</b> кг
						</span>
					) : (
						<span>Сейф отсутствует</span>
					)}
				</div>

				<div className="house_options-item">
					<img src={images.getImage('garage.svg')} alt="garage" />

					<span>
						<b>{vehicles}</b> мест в гараже
					</span>
				</div>
			</div>
		</div>
	);
}
