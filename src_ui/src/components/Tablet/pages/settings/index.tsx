import React, { useState } from 'react';
import { Page, Navbar, Toggle, List, ListItem } from 'framework7-react';

export default function TabletSettings() {
	const [lightTheme, toggleLightTheme] = useState<boolean>(false);

	async function toggleTabletTheme() {
		toggleLightTheme(!lightTheme);
	}

	return (
		<Page>
			<Navbar title="Настройки" />

			<List inset>
				<ListItem title="Светлая тема">
					<Toggle
						slot="after"
						color="green"
						name="theme"
						checked={lightTheme}
						onChange={toggleTabletTheme}
					/>
				</ListItem>
			</List>
		</Page>
	);
}
