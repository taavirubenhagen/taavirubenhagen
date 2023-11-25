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
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [0];

export const dictionary = {
		"/": [5],
		"/home": [6],
		"/main/contact": [7,[2]],
		"/main/home-dev": [9,[2]],
		"/main/home": [8,[2]],
		"/main/newsletter": [10,[2]],
		"/main/presenter/download-legacy": [12,[2]],
		"/main/presenter/download": [11,[2]],
		"/main/presenter/privacy-policy": [13,[2]],
		"/main/presenter/support-url": [14,[2]],
		"/main/presenter/waitlist": [15,[2]],
		"/main/privacy-policy": [16,[2]],
		"/main/projects": [17,[2]],
		"/personal/home": [18,[3]],
		"/products": [19,[4]],
		"/terminal": [~20],
		"/terminal/[route]": [21],
		"/tts": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';