type Props = {
	onChange?: (value: string) => void;
};

export default function Filter({ onChange }: Props) {
	const options: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

	return (
		<label className="relative">
			<select
				defaultValue="default"
				title="Filter by region"
				onChange={(e) => onChange?.(e.target.value)}
				className="dark:bg-midnight-100 dark:text-slate-100 mt-4 appearance-none w-44 py-5 px-4 rounded-lg shadow-lg border border-gray-300 dark:border-midnight-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 md:m-0"
			>
				<option value="default">All Regions</option>
				{options.map((option) => (
					<option key={option} value={option.toLowerCase()}>
						{option}
					</option>
				))}
			</select>

			<span className="absolute inset-y-0 right-0 pr-2 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-blue-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</span>
		</label>
	);
}
