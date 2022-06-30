/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: "Open Sans",
		},
		extend: {
			colors: {
				primary: "#3528EB",
				secondary: "#6B66F6",
				dark: "#070707",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

