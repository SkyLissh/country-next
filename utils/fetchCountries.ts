import Country from "models/country";
import settings from "utils/settings";

export interface CountryResponse {
	data?: Country[];
	error?: Error;
}

export default async function fetchCountries(endpoint: string): Promise<CountryResponse> {
	let data: Country[] | undefined;
	let error: Error | undefined;

	try {
		const res = await fetch(`${settings.countryAPI}${endpoint}`);

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		data = (await res.json()) as Country[];
	} catch (e) {
		error = e as Error;
	}

	return { data, error };
}
