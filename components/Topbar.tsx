import { useEffect, useState } from "react";
import { useDarkMode } from "hooks/useDarkMode";

import Button from "components/Button";

export default function Topbar() {
	const { isDarkMode, toggle } = useDarkMode();
	const [isMounted, setMounted] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		setMounted(true);
	});

	return (
		<header className="bg-white shadow-lg p-6 dark:bg-midnight-100">
			<div className="container flex items-center justify-between md:mx-auto">
				<h1 className="text-2xl font-extrabold dark:text-slate-100">
					Where in the world?
				</h1>
				{isMounted && (
					<Button title="Toggle Theme" onClick={toggle}>
						{isDarkMode ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						)}
					</Button>
				)}
			</div>
		</header>
	);
}
