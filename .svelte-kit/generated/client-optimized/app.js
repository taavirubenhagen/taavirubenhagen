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
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/admin": [~4],
		"/admin/access": [~5],
		"/admin/access/[password]": [~6],
		"/admin/login/[state]": [7],
		"/coming-soon": [8],
		"/counter/privacy-policy": [9],
		"/deprecated/home": [10],
		"/deprecated/main/home-dev": [12],
		"/deprecated/main/home": [11],
		"/deprecated/main/newsletter": [13],
		"/deprecated/main/projects": [14],
		"/deprecated/terminal": [~15],
		"/deprecated/terminal/[route]": [16],
		"/deprecated/tts": [17],
		"/drafts/hoffmanns-schuppen": [18],
		"/drafts/hoffmanns-schuppen/countdown": [19],
		"/drafts/hoffmanns-schuppen/investor-relations": [20],
		"/drafts/hoffmanns-schuppen/mach-mit": [21],
		"/drafts/hoffmanns-schuppen/produkte": [22],
		"/drafts/website": [23,[2]],
		"/legal/contact": [24],
		"/legal/privacy-policy": [25],
		"/politics/jugendparlament": [26],
		"/politics/jugendparlament/sticker": [27],
		"/presenter/download": [28],
		"/presenter/privacy-policy": [29],
		"/presenter/sticker": [30],
		"/presenter/support-url": [31],
		"/presenter/waitlist": [32],
		"/products": [33],
		"/products/coming-soon": [34],
		"/projects": [35]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';