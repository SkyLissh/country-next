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
			<form
				onSubmit={onSubmit}
				className="container mx-auto mt-8 px-4 md:flex md:justify-between md:items-center md:px-0"
			>
				<Search />
				<Filter />
			</form>

			<section className="container mx-auto mt-8 px-10 md:px-0 md:grid md:gap-y-16 md:gap-x-8 md:grid-cols-auto-fill">
				<Card />
				<Card />
				<Card />
				<Card />
			</section>
		</>
	);
}
