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
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [0];

export const dictionary = {
		"/": [4],
		"/home": [5],
		"/main/contact": [6,[2]],
		"/main/home-dev": [8,[2]],
		"/main/home": [7,[2]],
		"/main/newsletter": [9,[2]],
		"/main/presenter/download-legacy": [11,[2]],
		"/main/presenter/download": [10,[2]],
		"/main/presenter/privacy-policy": [12,[2]],
		"/main/presenter/support-url": [13,[2]],
		"/main/presenter/waitlist": [14,[2]],
		"/main/privacy-policy": [15,[2]],
		"/main/projects": [16,[2]],
		"/personal/home": [17,[3]],
		"/products": [18],
		"/terminal": [~19],
		"/terminal/[route]": [20],
		"/tts": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';