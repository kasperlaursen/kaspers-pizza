/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'fill-200': 'repeat(auto-fit, minmax(200px, 1fr))',
				'fill-350': 'repeat(auto-fit, minmax(350px, 1fr))'
			},
			animation: {
				'scale-hide': 'scale-hide .5s ease-in-out forwards'
			},
			keyframes: {
				'scale-hide': {
					'0%,': { transform: 'scale(100)' },
					'99%': { transform: 'scale(0)' },
					'100%': { display: 'none' }
				}
			}
		}
	},
	plugins: []
};
