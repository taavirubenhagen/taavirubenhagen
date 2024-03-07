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
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33')
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
		"/drafts/hoffmanns-schuppen/countdown": [18],
		"/drafts/hoffmanns-schuppen/investor-relations": [19],
		"/drafts/hoffmanns-schuppen/mach-mit": [20],
		"/drafts/hoffmanns-schuppen/produkte": [21],
		"/legal/contact": [22],
		"/legal/privacy-policy": [23],
		"/politics/jugendparlament": [24],
		"/politics/jugendparlament/sticker": [25],
		"/presenter/download": [26],
		"/presenter/privacy-policy": [27],
		"/presenter/sticker": [28],
		"/presenter/support-url": [29],
		"/presenter/waitlist": [30],
		"/products": [31],
		"/products/coming-soon": [32],
		"/projects": [33]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';