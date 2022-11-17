import Link from "next/link";
import Image from "next/image";

import Button from "components/Button";

import Country from "models/country";

type Props = {
	country: Country;
};

export default function Info({ country }: Props) {
	return (
		<>
			<div className="container mx-auto px-4 my-10 w-full xl:px-0">
				<Link
					href="/"
					className="bg-blue-500 text-white font-bold p-3 rounded-full shadow-lg inline-block"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
				</Link>
			</div>
			<main className="container mx-auto px-4 flex flex-wrap items-center justify-center xl:px-0 md:flex-nowrap">
				<div className="h-60 w-full relative shadow-xl lg:h-[50vh] md:mr-20">
					<Image
						className="object-cover rounded-lg"
						src={country.flags.svg}
						alt={country.name}
						sizes="100%"
						fill
					/>
				</div>
				<section className="w-full mt-8 dark:text-slate-100">
					<h1 className="text-2xl font-bold mb-4">{country.name}</h1>

					<div className="md:flex justify-between">
						<div>
							<p>
								<span className="font-semibold">Native Name: </span>
								{country.nativeName}
							</p>

							<p>
								<span className="font-semibold">Population: </span>
								{country.population.toLocaleString()}
							</p>

							<p>
								<span className="font-semibold">Region: </span>
								{country.region}
							</p>

							<p>
								<span className="font-semibold">Sub Region: </span>
								{country.subregion}
							</p>

							<p>
								<span className="font-semibold">Capital: </span>
								{country.capital}
							</p>
						</div>

						<div className="mt-4 md:mt-0">
							<p>
								<span className="font-semibold">Top Level Domain: </span>
								{country.topLevelDomain}
							</p>

							<p>
								<span className="font-semibold">Currencies: </span>
								{country.currencies?.map((currency) => currency.name).join(", ")}
							</p>

							<p>
								<span className="font-semibold">Languages: </span>
								{country.languages.map((language) => language.name).join(", ")}
							</p>
						</div>
					</div>
					<div className="mt-4">
						<p className="font-semibold">Border Countries:</p>

						<div className="my-6 grid gap-x-4 gap-y-4 grid-cols-3">
							{country.borders?.map((border) => (
								<p
									key={border}
									className="inline-block w-26 text-center bg-white dark:bg-midnight-100 rounded-sm shadow-sm py-1 text-sm font-semibold border border-gray-300 dark:border-midnight-50"
								>
									{border}
								</p>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
