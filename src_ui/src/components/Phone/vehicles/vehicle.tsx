import React from 'react';
import vehicles from 'data/vehicles.json';
import Navigation from '../partials/navigation';
import Button from '../partials/button';
import Group from '../partials/group';
import { VehicleData } from './index';

type Props = {
	data: VehicleData;

	getPosition: () => void;
	spawn: () => void;
	despawn: () => void;
	close: () => void;
};

export default function Vehicle({ data, getPosition, spawn, despawn, close }: Props) {
	return (
		<div className="vehicles_vehicle">
			<Navigation close={{ title: 'Транспорт', onClick: close }} />

			<Group className="vehicles_vehicle-info">
				<Button current={(vehicles as any)[data.model] ?? data.model}>Имя</Button>
				<Button current={data.govNumber || 'Отсутствует'}>Гос. номер</Button>
			</Group>

			<Group className="vehicles_vehicle-actions">
				<Button color="blue" onClick={spawn}>
					Доставить за 80$
				</Button>

				{data.spawned && (
					<Button color="red" onClick={despawn}>
						Эвакуировать
					</Button>
				)}

				<Button color="blue" onClick={getPosition}>
					Получить геопозицию
				</Button>
			</Group>
		</div>
	);
}
