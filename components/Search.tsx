import Button from "components/Button";

type Props = {
	onChange?: (value: string) => void;
};

export default function Search({ onChange }: Props) {
	return (
		<label className="relative">
			<input
				className="w-full py-5 px-4 rounded-lg shadow-lg border border-gray-300 placeholder:text-slate-500 focus:outline-none focus:border-purple-500"
				type="text"
				onChange={(e) => onChange?.(e.target.value)}
				placeholder="Search for a country..."
			/>
			<span className="absolute inset-y-0 right-0 pr-2 flex items-center">
				<Button title="Search">
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
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</Button>
			</span>
		</label>
	);
}
