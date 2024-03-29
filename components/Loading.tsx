import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function Loading(_, ref) {
	return (
		<div ref={ref} className="inline-flex items-center justify-center w-full my-8">
			<svg
				className="animate-spin h-24 w-24 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					className="opacity-25 text-blue-300"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className=" text-blue-500"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	);
});
