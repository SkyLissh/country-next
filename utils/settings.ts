class Settings {
	readonly countryAPI: string = `${process.env.COUNTRY_API}${process.env.COUNTRY_API_VERSION}`;
}

export default new Settings();
