import Image from "next/image";

import Country from "models/country";

type Props = {
	country: Country;
};

export default function Card({ country }: Props) {
	return (
		<li className="bg-white dark:bg-midnight-100 dark:text-slate-100 mb-10 rounded-lg shadow-lg border border-gray-300 dark:border-midnight-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 hover:border-blue-500 dark:hover:border-blue-500 hover:cursor-pointer">
			<div className="h-44 relative">
				<Image
					className="object-cover rounded-t-lg w-full"
					src={country.flags.svg}
					alt={country.name}
					layout="fill"
				/>
			</div>

			<div className="p-6">
				<h2 className="text-lg font-extrabold mb-4">{country.name}</h2>

				<p>
					<span className="font-semibold">Population: </span>
					{country.population.toLocaleString()}
				</p>
				<p>
					<span className="font-semibold">Region: </span>
					{country.region}
				</p>
				<p>
					<span className="font-semibold">Capital: </span>
					{country.capital}
				</p>
			</div>
		</li>
	);
}
