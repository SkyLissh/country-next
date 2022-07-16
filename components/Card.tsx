export default function Card() {
	return (
		<li className="bg-white dark:bg-midnight-100 dark:text-slate-100 mb-10 rounded-lg shadow-lg transition-colors ease-in duration-300 border border-gray-300 dark:border-midnight-50 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 hover:border-blue-500 dark:hover:border-blue-500 hover:cursor-pointer">
			<img
				className="object-cover rounded-t-lg"
				src="https://via.placeholder.com/600x350"
				alt="Country"
			/>

			<div className="p-6">
				<h2 className="text-lg font-extrabold mb-4">Country Name</h2>

				<p>
					<span className="font-semibold">Population: </span>323,947,000
				</p>
				<p>
					<span className="font-semibold">Region: </span>Americas
				</p>
				<p>
					<span className="font-semibold">Capital: </span>Washington, D.C.
				</p>
			</div>
		</li>
	);
}
