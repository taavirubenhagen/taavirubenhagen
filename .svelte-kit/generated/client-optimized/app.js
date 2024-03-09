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
	() => import('./nodes/30')
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
		"/drafts/hoffmanns-schuppen/investor-relations": [12],
		"/drafts/hoffmanns-schuppen/mach-mit": [13],
		"/drafts/hoffmanns-schuppen/produkte": [14],
		"/drafts/terminal": [~15],
		"/drafts/terminal/[route]": [16],
		"/drafts/website": [17,[2]],
		"/drafts/website/contact": [18,[2]],
		"/legal/contact": [19],
		"/legal/privacy-policy": [20],
		"/politics/jugendparlament": [21],
		"/politics/jugendparlament/sticker": [22],
		"/presenter/download": [23],
		"/presenter/privacy-policy": [24],
		"/presenter/sticker": [25],
		"/presenter/support-url": [26],
		"/presenter/waitlist": [27],
		"/projects": [28],
		"/shop/dropshipping": [29],
		"/shop/dropshipping/coming-soon": [30]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';