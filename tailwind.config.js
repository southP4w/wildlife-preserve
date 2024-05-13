// Source: https://tailwindcss.com/docs/guides/vite -> tailwind.config.js
// https://youtu.be/LDB4uaJ87e0 @26:48 - 30:24

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif']
			},
			gridTemplateColumns: {
				'70/30': '70% 28%',
			}
		},
	},
	plugins: [],
}