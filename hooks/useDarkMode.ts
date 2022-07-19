import { useEffect, useState } from "react";

interface useDarkModeReturn {
	isDarkMode: boolean;
	toggle: () => void;
}

function getDarkMode(): boolean {
	if (typeof window === "undefined") {
		return false;
	}

	const stored = localStorage.getItem("dark-mode");
	if (stored) {
		return stored === "true";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useDarkMode(): useDarkModeReturn {
	const [isDarkMode, setIsDarkMode] = useState(getDarkMode());

	useEffect(() => {
		localStorage.setItem("dark-mode", isDarkMode.toString());
	}, [isDarkMode]);

	return { isDarkMode, toggle: () => setIsDarkMode(!isDarkMode) };
}
