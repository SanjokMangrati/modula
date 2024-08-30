/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			display: ["Open Sans", "sans-serif"],
			body: ["Open Sans", "sans-serif"],
		},
		extend: {
			fontSize: {
				14: "14px",
			},
			backgroundColor: {
				"main-bg": "#FAFBFB",
				"main-dark-bg": "#20232A",
				"secondary-dark-bg": "#33373E",
				"light-gray": "#F7F7F7",
				"half-transparent": "rgba(0, 0, 0, 0.5)",
			},
			borderWidth: {
				1: "1px",
			},
			borderColor: {
				color: "rgba(0, 0, 0, 0.1)",
			},
			width: {
				400: "400px",
				760: "760px",
				780: "780px",
				800: "800px",
				1000: "1000px",
				1200: "1200px",
				1400: "1400px",
			},
			height: {
				80: "80px",
			},
			minHeight: {
				590: "590px",
			},
			backgroundImage: {
				"hero-pattern":
					"url('https://img.freepik.com/free-vector/hand-drawn-flat-groovy-psychedelic-background_23-2149074391.jpg?t=st=1725040635~exp=1725044235~hmac=5d64d340ce37a68fdca45ee5e5b9c15929d2919330571282b9833357f3a00cbc&w=1380')",
			},
		},
	},
	plugins: [],
};
