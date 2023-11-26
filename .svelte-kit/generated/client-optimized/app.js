export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/home": [3],
		"/legal/contact": [4],
		"/legal/privacy-policy": [5],
		"/main/home-dev": [7],
		"/main/home": [6],
		"/main/newsletter": [8],
		"/main/presenter/download-legacy": [10],
		"/main/presenter/download": [9],
		"/main/presenter/privacy-policy": [11],
		"/main/presenter/support-url": [12],
		"/main/presenter/waitlist": [13],
		"/main/projects": [14],
		"/products": [15],
		"/projects": [16],
		"/terminal": [~17],
		"/terminal/[route]": [18],
		"/tts": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';