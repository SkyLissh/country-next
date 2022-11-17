class Settings {
	private readonly _url?: string = process.env.NEXT_PUBLIC_COUNTRY_API;
	private readonly _version?: string = process.env.NEXT_PUBLIC_COUNTRY_API_VERSION;
	readonly countryAPI: string = `${this._url}/${this._version}`;
}

export default new Settings();
