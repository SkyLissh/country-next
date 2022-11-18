import { GetStaticProps } from "next";
import { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SWRConfig } from "swr";

import Head from "components/Head";
import Topbar from "components/Topbar";

import CountryList from "components/CountryList";
import Filter from "components/Filter";
import Search from "components/Search";

import Loading from "components/Loading";
import Country from "models/country";
import fetchCountries, { CountryResponse } from "utils/fetchCountries";

export const getStaticProps: GetStaticProps<CountryResponse> = async () => {
	const { data, error } = await fetchCountries("/all");

	return {
		props: {
			...(data && { data: data.slice(0, 20) }),
			...(error && { error })
		}
	};
};

export default function Home({ data: initialData, error }: CountryResponse) {
	const [data, setData] = useState(initialData);
	const [filterData, setFilterData] = useState(initialData);
	const [countries, setCountries] = useState(initialData);
	const [filter, setFilter] = useState("");
	const [skip, setSkip] = useState(20);

	const handleObserver = useCallback(
		(inView: boolean, entry: IntersectionObserverEntry) => {
			if (inView) {
				setCountries((prev) => [...prev!, ...filterData!.slice(skip, skip + 20)]);
				setSkip(skip + 20);
			}
		},
		[skip, filterData]
	);
	const { ref } = useInView({ onChange: handleObserver });

	function onHydrate(data?: Country[]) {
		setData(data);
		setFilterData(data);
	}

	function handleSearch(value: string) {
		const filtered = data
			?.filter((country) => country.region.toLowerCase().includes(filter.toLowerCase()))
			.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()));

		setFilterData(filtered);
		setCountries(filtered?.slice(0, 20));
		setSkip(20);
	}

	function handleFilter(value: string) {
		setFilter(value);
		const filtered = data?.filter((country) =>
			country.region.toLowerCase().includes(value.toLowerCase())
		);

		setFilterData(filtered);
		setCountries(filtered?.slice(0, 20));
		setSkip(20);
	}

	return (
		<>
			<Head title="Country API - Home" />

			<Topbar />
			<main className="container mx-auto">
				<code className="text-white font-medium pr-4">
					{JSON.stringify(countries?.length)}
				</code>
				<code className="text-white font-medium">
					{JSON.stringify(filterData?.length)}
				</code>
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
							fallback: { "/all": { data, error } },
							fetcher: fetchCountries,
							revalidateOnFocus: false
						}}
					>
						<CountryList countries={countries} onHydrate={onHydrate} />
					</SWRConfig>
				)}
				{filterData && filterData.length !== countries?.length && <Loading ref={ref} />}
				{error && <li>{error.message}</li>}
			</main>
		</>
	);
}
