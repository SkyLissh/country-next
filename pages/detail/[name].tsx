import { GetServerSideProps } from "next";

import Head from "components/Head";
import Topbar from "components/Topbar";
import Info from "components/Info";

import Country from "models/country";
import settings from "utils/settings";

type Props = {
	data: Country | null;
	error: string | null;
};

type Params = {
	name: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
	const { name } = ctx?.params as Params;

	let data: Country | null = null;
	let errorFetch: string | null = null;

	try {
		const res = await fetch(`${settings.countryAPI}/name/${name}`);
		console.log(res.status);

		if (!res.ok) {
			throw new Error(res.statusText);
		}

		const resData = (await res.json()) as Country[];
		data = resData[0];
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

export default function Detail({ data, error }: Props) {
	return (
		<>
			<Head title="Country API - Detail" />
			<Topbar />

			{data && <Info country={data} />}
			{error && <p className="text-red-500">{error}</p>}
		</>
	);
}
