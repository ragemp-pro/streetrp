import React from 'react';
import Ban from './ban';
import Reports from './reports';
import Vehicle from './vehicle';
import Kick from './kick';
import Skin from './skin';
import Money from './money';
import Teleport from './teleport';
import Spectator from './spectator';
import Chat from './chat';
import House from './house';
import Demorgan from './demorgan';
import Faction from './faction';
import Journal from './journal';

type Tab = {
	name: string;
	component?: React.ComponentClass<any, any> | React.FunctionComponent;
};

const helperTabs: Tab[] = [
	{
		name: 'Кик',
		component: Kick
	},
	{
		name: 'Деморган',
		component: Demorgan
	},
	{
		name: 'Телепорт',
		component: Teleport
	},
	{
		name: 'Репорты',
		component: Reports
	},
	{
		name: 'Наблюдение',
		component: Spectator
	}
];

const adminTabs: Tab[] = [
	{
		name: 'Бан',
		component: Ban
	},
	{
		name: 'Транспорт',
		component: Vehicle
	},
	{
		name: 'Скин игрока',
		component: Skin
	},
	{
		name: 'Уведомления',
		component: Chat
	}
];

const gmTabs: Tab[] = [
	{
		name: 'Валюта',
		component: Money
	},
	{
		name: 'Организации',
		component: Faction
	},
	{
		name: 'Журнал действий',
		component: Journal
	}
];

const ownerTabs: Tab[] = [
	{
		name: 'Дома',
		component: House
	}
];

export default [
	helperTabs,
	[...helperTabs, ...adminTabs],
	[...helperTabs, ...adminTabs, ...gmTabs],
	[...helperTabs, ...adminTabs, ...gmTabs, ...ownerTabs]
];
