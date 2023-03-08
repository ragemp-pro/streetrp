import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import vehicles from 'data/vehicles.json';

type Props = {
	name: string;
	owner: string;
	owners: number;
};

export default function DatabaseVehicle(props: Props) {
	const { name, owner, owners } = props;

	return (
		<Page>
			<Navbar title="ТС" backLink="Поиск" />

			<List inset>
				<ListItem title="Название" after={(vehicles as any)[name] ?? name} />
				<ListItem title="Владелец" after={owner} />
				<ListItem title="Всего владельцев" after={owners.toString()} />
			</List>
		</Page>
	);
}
