/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		fontFamily: {
			body: 'Inter Variable',
			heading: 'Poppins',
		},

		fontSize: {
			1: 'clamp(0.9688rem, 0.9479rem + 0.1042vw, 1.0313rem)',
			2: 'clamp(1.0898rem, 1.0234rem + 0.332vw, 1.2891rem)',
			3: 'clamp(1.2261rem, 1.0977rem + 0.6421vw, 1.6113rem)',
			4: 'clamp(1.3793rem, 1.1677rem + 1.058vw, 2.0142rem)',
			5: 'clamp(1.5518rem, 1.2298rem + 1.6099vw, 2.5177rem)',
			6: 'clamp(1.7457rem, 1.2786rem + 2.3357vw, 3.1471rem)',
			7: 'clamp(1.9639rem, 1.3073rem + 3.2833vw, 3.9339rem)',
			8: 'clamp(2.2094rem, 1.3068rem + 4.5133vw, 4.9174rem)',
			9: 'clamp(2.4856rem, 1.2652rem + 6.1019vw, 6.1467rem)',
			10: 'clamp(2.7963rem, 1.1673rem + 8.1452vw, 7.6834rem)',
		},

		extend: {
			spacing: {
				0: '0',
				1: 'clamp(0.25rem, 0.1678rem + 0.4112vi, 0.5625rem)',
				2: 'clamp(0.5rem, 0.4013rem + 0.4934vi, 0.875rem)',
				3: 'clamp(0.75rem, 0.6513rem + 0.4934vi, 1.125rem)',
				4: 'clamp(1rem, 0.8191rem + 0.9046vi, 1.6875rem)',
				5: 'clamp(1.5rem, 1.3026rem + 0.9868vi, 2.25rem)',
				6: 'clamp(2rem, 1.6382rem + 1.8092vi, 3.375rem)',
				7: 'clamp(3rem, 2.6053rem + 1.9737vi, 4.5rem)',
				8: 'clamp(4rem, 3.2763rem + 3.6184vi, 6.75rem)',
			},
		},
	},
};
