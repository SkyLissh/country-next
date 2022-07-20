import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

import Head from "components/Head";
import Topbar from "components/Topbar";
import Info from "components/Info";

import fetchCountries, { CountryResponse as Props } from "utils/fetchCountries";

type Params = {
	name: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data, error } = await fetchCountries("/all");

	if (!data) {
		throw new Error(error?.message);
	}

	return {
		paths: data.map((country) => ({
			params: {
				name: country.name.toLowerCase()
			}
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const { data, error } = await fetchCountries(`/name/${params?.name}`);

	return {
		props: {
			data,
			error
		}
	};
};

export default function Detail({ data, error }: Props) {
	return (
		<>
			<Head title="Country API - Detail" />
			<Topbar />

			{data && <Info country={data[0]} />}
			{error && <p className="text-red-500">{error.message}</p>}
		</>
	);
}
