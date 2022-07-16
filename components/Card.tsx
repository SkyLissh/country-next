export default function Card() {
	return (
		<div className="bg-white mb-10 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:border-purple-500 hover:border-purple-500 hover:cursor-pointer">
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
		</div>
	);
}
