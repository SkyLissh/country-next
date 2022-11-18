import useSWR from "swr";

import Card from "components/Card";
import Country from "models/country";
import { useEffect } from "react";
import { CountryResponse } from "utils/fetchCountries";

type Props = {
	countries: Country[];
	onHydrate: (data?: Country[]) => void;
};

export default function CountryList({ countries, onHydrate }: Props) {
	const { data, error } = useSWR<CountryResponse>("/all");

	useEffect(() => {
		onHydrate(data!.data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<ul className="px-10 md:px-0 md:grid md:gap-y-16 md:gap-x-8 md:grid-cols-auto-fill">
			{countries?.map((country) => (
				<Card key={country.name} country={country} />
			))}
		</ul>
	);
}
