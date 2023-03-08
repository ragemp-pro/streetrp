import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import Creator from './creator';
import Despawn from './despawn';

export default function AdminVehicle() {
	return (
		<div className="admin_vehicle">
			<Tabs prefixCls="admin_tabs">
				<TabPane tab="Создать" key="create">
					<Creator />
				</TabPane>

				<TabPane tab="Деспавн" key="despawn">
					<Despawn />
				</TabPane>
			</Tabs>
		</div>
	);
}
