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
	() => import('./nodes/22'),
	() => import('./nodes/23')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/admin": [~3],
		"/admin/access": [~4],
		"/admin/access/[password]": [~5],
		"/admin/login/[state]": [6],
		"/home": [7],
		"/legal/contact": [8],
		"/legal/privacy-policy": [9],
		"/main/home-dev": [11],
		"/main/home": [10],
		"/main/newsletter": [12],
		"/main/presenter/download-legacy": [14],
		"/main/presenter/download": [13],
		"/main/presenter/privacy-policy": [15],
		"/main/presenter/support-url": [16],
		"/main/presenter/waitlist": [17],
		"/main/projects": [18],
		"/products": [19],
		"/projects": [20],
		"/terminal": [~21],
		"/terminal/[route]": [22],
		"/tts": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';