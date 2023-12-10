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
	() => import('./nodes/23'),
	() => import('./nodes/24')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin": [~3],
		"/admin/access": [~4],
		"/admin/access/[password]": [~5],
		"/admin/login/[state]": [6],
		"/counter/privacy-policy": [7],
		"/deprecated/home": [8],
		"/deprecated/main/home-dev": [10],
		"/deprecated/main/home": [9],
		"/deprecated/main/newsletter": [11],
		"/deprecated/main/projects": [12],
		"/deprecated/terminal": [~13],
		"/deprecated/terminal/[route]": [14],
		"/deprecated/tts": [15],
		"/legal/contact": [16],
		"/legal/privacy-policy": [17],
		"/presenter/download": [18],
		"/presenter/privacy-policy": [19],
		"/presenter/support-url": [20],
		"/presenter/waitlist": [21],
		"/products": [22],
		"/products/coming-soon": [23],
		"/projects": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';