import useSWR from "swr";

import Card from "components/Card";

import fetchCountries, { CountryResponse } from "utils/fetchCountries";

export default function CountryList() {
	const { data } = useSWR<CountryResponse>("/all", fetchCountries);
	const countries = data?.data;

	return (
		<ul className="px-10 md:px-0 md:grid md:gap-y-16 md:gap-x-8 md:grid-cols-auto-fill">
			{countries?.map((country) => (
				<Card key={country.name} country={country} />
			))}
		</ul>
	);
}
