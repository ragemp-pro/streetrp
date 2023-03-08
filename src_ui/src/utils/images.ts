class Images {
	getImage(name: string, folder?: string) {
		try {
			if (!name) return;

			return folder
				? require(`../assets/images/${folder}/${name}`)
				: require(`../assets/images/${name}`);
		} catch (err) {
			// eslint-disable-next-line no-console
			if (process.env.NODE_ENV === 'development') console.error(err);

			return '';
		}
	}
}

export default new Images();
