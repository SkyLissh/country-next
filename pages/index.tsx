import { GetServerSideProps } from "next";
import { useState } from "react";

import Head from "components/Head";
import Topbar from "components/Topbar";

import Search from "components/Search";
import Filter from "components/Filter";
import Card from "components/Card";

import Country from "models/country";
import settings from "utils/settings";

type Props = {
	data: Country[];
	error: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	let data: Country[] = [];
	let errorFetch: string = "";

	try {
		const res = await fetch(`${settings.countryAPI}/all`);

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		data = (await res.json()) as Country[];
	} catch (error) {
		errorFetch = (error as Error).message;
	}
	return {
		props: {
			data,
			error: errorFetch
		}
	};
};

export default function Home({ data, error }: Props) {
	const [countries, setCountries] = useState(data);
	const [filter, setFilter] = useState("");

	function handleSearch(value: string) {
		setCountries(
			data
				.filter((country) => country.region.toLowerCase().includes(filter.toLowerCase()))
				.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))
		);
	}

	function handleFilter(value: string) {
		setFilter(value);
		setCountries(
			data.filter((country) => country.region.toLowerCase().includes(value.toLowerCase()))
		);
	}

	return (
		<>
			<Head title="Country API - Home" />

			<Topbar />
			<form
				onSubmit={(e) => e.preventDefault()}
				className="container mx-auto my-14 px-4 md:flex md:justify-between md:items-center md:px-0"
			>
				<Search onChange={handleSearch} />
				<Filter onChange={handleFilter} />
			</form>

			<ul className="container mx-auto px-10 md:px-0 md:grid md:gap-y-16 md:gap-x-8 md:grid-cols-auto-fill">
				{countries.map((country) => (
					<Card key={country.name} country={country} />
				))}
				{error !== "" ? <li>{error}</li> : null}
			</ul>
		</>
	);
}
