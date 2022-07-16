/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				midnight: {
					50: "#405061",
					100: "#2B3945",
					200: "#202c37"
				}
			},
			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fill, minmax(17rem, 1fr))"
			}
		}
	},
	plugins: []
};
