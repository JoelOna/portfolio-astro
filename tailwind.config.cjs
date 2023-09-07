/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	theme: {
		screens: {
		  'sm': '576px',
		  // => @media (min-width: 576px) { ... }
	
		  'md': '960px',
		  // => @media (min-width: 960px) { ... }
	
		  'lg': '1480px',
		  // => @media (min-width: 1440px) { ... }
		},
	  },
	plugins: [],
}
