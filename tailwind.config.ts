import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: {
					"50": "#e8eaec",
					"100": "#d1d4d9",
					"200": "#a4aab3",
					"300": "#767f8d",
					"400": "#495567",
					"500": "#1b2a41",
					"600": "#162234",
					"700": "#101927",
					"800": "#0b111a",
					"900": "#05080d",
				},
			},
		},
	},
	plugins: [],
};
export default config;
