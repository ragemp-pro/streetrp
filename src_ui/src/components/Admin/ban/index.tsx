import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import Ban from './ban';
import Unban from './unban';

export default function AdminBan() {
	return (
		<div className="admin_ban">
			<Tabs prefixCls="admin_tabs">
				<TabPane tab="Бан" key="ban">
					<Ban />
				</TabPane>

				<TabPane tab="Разбан" key="unban">
					<Unban />
				</TabPane>
			</Tabs>
		</div>
	);
}
