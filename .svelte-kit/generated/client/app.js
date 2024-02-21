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
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29')
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
		"/drafts/hoffmanns-schuppen": [17],
		"/legal/contact": [18],
		"/legal/privacy-policy": [19],
		"/politics/jugendparlament": [20],
		"/politics/jugendparlament/sticker": [21],
		"/presenter/download": [22],
		"/presenter/privacy-policy": [23],
		"/presenter/sticker": [24],
		"/presenter/support-url": [25],
		"/presenter/waitlist": [26],
		"/products": [27],
		"/products/coming-soon": [28],
		"/projects": [29]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';