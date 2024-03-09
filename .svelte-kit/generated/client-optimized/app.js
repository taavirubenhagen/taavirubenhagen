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
	() => import('./nodes/32')
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
		"/drafts/hoffmanns-schuppen": [10],
		"/drafts/hoffmanns-schuppen/countdown": [11],
		"/drafts/hoffmanns-schuppen/home": [12],
		"/drafts/hoffmanns-schuppen/investor-relations": [13],
		"/drafts/hoffmanns-schuppen/mach-mit": [14],
		"/drafts/hoffmanns-schuppen/produkte": [15],
		"/drafts/terminal": [~16],
		"/drafts/terminal/[route]": [17],
		"/drafts/website": [18,[2]],
		"/drafts/website/contact": [19,[2]],
		"/hs": [20],
		"/legal/contact": [21],
		"/legal/privacy-policy": [22],
		"/politics/jugendparlament": [23],
		"/politics/jugendparlament/sticker": [24],
		"/presenter/download": [25],
		"/presenter/privacy-policy": [26],
		"/presenter/sticker": [27],
		"/presenter/support-url": [28],
		"/presenter/waitlist": [29],
		"/projects": [30],
		"/shop/dropshipping": [31],
		"/shop/dropshipping/coming-soon": [32]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';