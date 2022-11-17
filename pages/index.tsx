import { GetStaticProps } from "next";
import { useState } from "react";
import { SWRConfig } from "swr";

import Head from "components/Head";
import Topbar from "components/Topbar";

import Search from "components/Search";
import Filter from "components/Filter";
import CountryList from "components/CountryList";

import fetchCountries, { CountryResponse } from "utils/fetchCountries";
import Country from "models/country";

export const getStaticProps: GetStaticProps<CountryResponse> = async () => {
	const { data, error } = await fetchCountries("/all");

	return {
		props: {
			data: data && data.slice(0, 20),
			error
		}
	};
};

export default function Home({ data: initialData, error }: CountryResponse) {
	const [data, setData] = useState(initialData);
	const [countries, setCountries] = useState(data);
	const [filter, setFilter] = useState("");

	function onHydrate(data: Country[] | null) {
		setData(data);
		setCountries(data);
	}

	function handleSearch(value: string) {
		setCountries(
			data &&
				data
					.filter((country) =>
						country.region.toLowerCase().includes(filter.toLowerCase())
					)
					.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))
		);
	}

	function handleFilter(value: string) {
		setFilter(value);
		setCountries(
			data &&
				data.filter((country) =>
					country.region.toLowerCase().includes(value.toLowerCase())
				)
		);
	}

	return (
		<>
			<Head title="Country API - Home" />

			<Topbar />
			<main className="container mx-auto">
				<form
					onSubmit={(e) => e.preventDefault()}
					className="my-14 px-4 md:flex md:justify-between md:items-center md:px-0"
				>
					<Search onChange={handleSearch} />
					<Filter onChange={handleFilter} />
				</form>

				{countries && (
					<SWRConfig
						value={{
							fallback: { "/all": { data: countries, error } },
							fetcher: fetchCountries
						}}
					>
						<CountryList countries={countries} onHydrate={onHydrate} />
					</SWRConfig>
				)}
				{error && <li>{error.message}</li>}
			</main>
		</>
	);
}
