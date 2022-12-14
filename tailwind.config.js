module.exports = {
	theme: {
		fontFamily: {
			sans: [
				"Helvetica Neue",
				"Helvetica",
				"Arial",
				"ui-sans-serif",
				"system-ui",
				"sans-serif",
			],
		},
		extend: {
			colors: {
				spier: { 100: "#006ab3" },
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
	content: ["src/**/*.njk", "src/**/*.js"],
};
