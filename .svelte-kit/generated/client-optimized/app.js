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
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin": [~3],
		"/admin/access": [~4],
		"/admin/access/[password]": [~5],
		"/admin/login/[state]": [6],
		"/coming-soon": [7],
		"/counter/privacy-policy": [8],
		"/deprecated/home": [9],
		"/deprecated/main/home-dev": [11],
		"/deprecated/main/home": [10],
		"/deprecated/main/newsletter": [12],
		"/deprecated/main/projects": [13],
		"/deprecated/terminal": [~14],
		"/deprecated/terminal/[route]": [15],
		"/deprecated/tts": [16],
		"/legal/contact": [17],
		"/legal/privacy-policy": [18],
		"/politics/jugendparlament": [19],
		"/presenter/download": [20],
		"/presenter/privacy-policy": [21],
		"/presenter/support-url": [22],
		"/presenter/waitlist": [23],
		"/products": [24],
		"/products/coming-soon": [25],
		"/projects": [26]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';