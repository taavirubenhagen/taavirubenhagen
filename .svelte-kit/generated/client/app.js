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

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin": [~3],
		"/admin/access": [~4],
		"/admin/access/[password]": [~5],
		"/admin/login/[state]": [6],
		"/deprecated/home": [7],
		"/deprecated/main/home-dev": [9],
		"/deprecated/main/home": [8],
		"/deprecated/main/newsletter": [10],
		"/deprecated/main/projects": [11],
		"/deprecated/terminal": [~12],
		"/deprecated/terminal/[route]": [13],
		"/deprecated/tts": [14],
		"/legal/contact": [15],
		"/legal/privacy-policy": [16],
		"/presenter/download": [17],
		"/presenter/privacy-policy": [18],
		"/presenter/support-url": [19],
		"/presenter/waitlist": [20],
		"/products": [21],
		"/products/coming-soon": [22],
		"/projects": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';