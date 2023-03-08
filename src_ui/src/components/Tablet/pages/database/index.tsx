import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default function Database() {
	return (
		<Page>
			<Navbar title="База данных" />

			<List inset>
				<ListItem link="users/" title="Граждани" />
				<ListItem link="vehicles/" title="Транспортные средства" />
				<ListItem link="/wanted/" title="Розыск" />
			</List>
		</Page>
	);
}
