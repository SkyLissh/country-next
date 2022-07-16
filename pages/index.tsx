import { FormEvent } from "react";

import Head from "components/Head";
import Topbar from "components/Topbar";

import Search from "components/Search";
import Filter from "components/Filter";
import Card from "components/Card";

export default function Home() {
	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<>
			<Head title="Country API - Home" />

			<Topbar />
			<form onSubmit={onSubmit} className="container mx-auto mt-8 px-4">
				<Search />
				<Filter />
			</form>

			<section className="container mx-auto mt-8 px-10">
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</>
	);
}
