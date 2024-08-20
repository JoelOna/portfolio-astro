<template>
	<div class="grid grid-cols-3 gap-2">
		<div v-for="(project, index) in projects" :key="index"
			:class="{ 'rounded-xl': true, 'border-2': true, 'col-span-2': index === 3 || index === 6 }"
			class="relative overflow-hidden">

			<!-- Imagen de fondo -->
			<img 
				:src="project.img" 
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-in-out transform hover:scale-110 z-0"
				:alt="project.name">

			<!-- Fondo con opacidad -->
			<div class="absolute inset-0 bg-black bg-opacity-50 z-10 hover:bg-gray-600 hover:bg-opacity-25 transition-colors">
			</div>

			<!-- Contenido del proyecto -->
			<div class="relative z-20 p-4 mt-24">
				<div>
					<h3 class="text-xl font-semibold flex gap-x-3 items-center text-white/80"> 
							<a :href="project.link" target="_blank">
								{{ project.title }}
							</a>
					</h3>
				</div>
				<div class="flex flex-row justify-between">
					<ul class="flex flex-wrap justify-start w-full gap-x-2">
						<li v-for="(tag, index) in project.tags" :key="index" class="flex items-center mb-2 lg:mb-0">
							<span class="flex items-center rounded-full text-xs text-white">
								<span v-html="tag.svg"></span>
							</span>
						</li>
					</ul>
					<span>
						<a :href="project.github" target="_blank">
							<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
						</a>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>



<script setup>
import angular from '../icons/angular.astro'
import Express from '../icons/express.astro';
import typescript from '../icons/typescript.astro'
import Bootstrap from '../icons/bootstrap.astro';
const TAGS = {
	angular: {
		name: 'Angular',
		icon: angular,
		class: 'bg-[#473a4f] text-white py-1 px-2 border border-white/10',
		svg:  '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-angular"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" /><path d="M9 15l3 -8l3 8" /><path d="M10 13h4" /></svg>'
	},
	express: {
		name: 'Express',
		icon: Express,
		class: 'bg-[#5b5a5c] text-white py-1 px-2 border border-white/10',
		svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>'
	},
	typescript: {
		name: 'Typescript',
		icon: typescript,
		class: 'bg-[#3b4857] text-white py-1 px-2 border border-white/10',
		svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-typescript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>'
	},
	bootstrap: {
		name: 'Bootstrap',
		icon: Bootstrap,
		class: 'bg-[#393142] text-white py-1 px-2 border border-white/10',
		svg:' <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>'
	},
	tailwind: {
		name: 'Tailwind',
		icon: '<svg viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="a"><stop stop-color="#2298BD" offset="0%"/><stop stop-color="#0ED7B5" offset="100%"/></linearGradient></defs><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#a)"/></svg>',
		class: 'bg-[#003159] text-white py-1 px-2 border border-white/10',
		svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>'
	},
	vue:{
		name: 'Vuejs',
		svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vue"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.5 4l-4.5 8l-4.5 -8" /><path d="M3 4l9 16l9 -16" /></svg>'
	},
	css: {
		name:'CSS',
		svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-css"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /></svg>'
	},
	javascript:{
		name:'JavaScript',
		svg:'<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>'
	}

}
const projects = [
	{
		title: 'Rick y Morty',
		description: "Una aplicación que muestra los personajes, episodios y localizaciones de la serie 'Rick And Morty'.",
		link: 'https://rick-and-morty-five-nu.vercel.app/',
		github: 'https://github.com/JoelOna/rick-and-morty',
		img: '/rickandmorty.png',
		tags: [TAGS.angular, TAGS.typescript, TAGS.bootstrap]
	},
	{
		title: 'HAFIT',
		description: 'Proyecto de final de curso sobre un tienda de venta de suplementos deportivos, accesorios, planes nutricionales y guias de ejercicios.',
		link: 'https://leonardocaero.github.io/HAFIT',
		github: 'https://github.com/LeonardoCaero/HAFIT',
		img: '/hafit.png',
		tags: [TAGS.express, TAGS.angular, TAGS.typescript, TAGS.bootstrap]
	},
	{
		title: 'Sudoku',
		description: '',
		link: 'https://sudoku-vue-theta.vercel.app/',
		github: 'https://github.com/JoelOna/sudoku-vue',
		img: '/sudoku.png',
		tags: [TAGS.vue, TAGS.express, TAGS.css]
	}

]
</script>

<style scoped>
* {
	color: white;
}

li {
	list-style: none;
}
</style>