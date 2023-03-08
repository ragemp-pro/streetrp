export const sections: {
	[name: string]: { [name: string]: string | [string, string] };
} = {
	player: {
		organization: 'Организация',
		docs: 'Документы',
		property: 'Имущество',
		others: 'Другие действия'
	},
	self: {
		mood: 'Настроение',
		walking: 'Стиль ходьбы',
		animations: 'Анимации',
		docs: 'Документы'
	},
	vehicle: {
		seatbelt: 'Ремень безопасности',
		lock: 'Замок',
		doors: 'Двери',
		trunk: 'Багажник',
		passengers: 'Высадить пассажира',
		refuel: 'Заправить',
		repair: 'Починить'
	}
};

export const groups: typeof sections = {
	organization: {},
	others: {
		money: 'Дать денег',
		handshake: 'Пожать руку'
	},
	docs: {
		passport: 'Паспорт',
		licenses: 'Лицензии'
	},
	property: {
		vehicle: 'Продажа ТС',
		house: 'Продажа дома',
		business: 'Продажа бизнеса'
	},
	passengers: {},
	doors: {
		hood: 'Капот',
		front_left: ['Перед. левая', 'doors'],
		front_right: ['Перед. правая', 'doors'],
		rear_left: ['Задн. левая', 'doors'],
		rear_right: ['Задн. правая', 'doors']
	},
	trunk: {
		inventory: ['Открыть', 'trunk'],
		access: ['Доступ', 'trunk']
	},
	mood: {
		normal: ['Обычное', 'mood'],
		aiming: ['Игривое', 'mood'],
		angry: ['Гневное', 'mood'],
		drunk: ['Пьяное', 'mood'],
		happy: ['Cчастливое', 'mood'],
		injured: ['Грустное', 'mood'],
		stressed: ['Стрессовое', 'mood'],
		sulking: ['Обиженное', 'mood']
	},
	walking: {
		normal: ['Обычный', 'walking'],
		drunk: ['Пьяный', 'walking'],
		fat: ['Тучный', 'walking'],
		gangster: ['Гангстер', 'walking'],
		quick: ['Торопящийся', 'walking'],
		sad: ['Грустный', 'walking'],
		injured: ['Раненый', 'walking']
	},
	animations: {}
};
