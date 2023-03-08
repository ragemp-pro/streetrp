import cargo from './cargo';

class Job {
	constructor() {
		mp.events.subscribe({
			'Job-ShowMenu': this.showMenu.bind(this),
			'Job-FinishWork': this.finishWork.bind(this)
		});
	}

	private showMenu(name: string, level: number, progress: number, isWorking: boolean) {
		mp.browsers.showPage('job', {
			name,
			level,
			progress,
			isWorking
		});
	}

	private finishWork() {
		cargo.removePoint();
		mp.events.callServer('Jobs-FinishWork', null, false);
	}
}

export default new Job();
