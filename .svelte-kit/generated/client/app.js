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

export const server_loads = [0];

export const dictionary = {
		"/": [9],
		"/main/contact": [10,[2]],
		"/main/home-dev": [12,[2]],
		"/main/home": [11,[2]],
		"/main/newsletter": [13,[2]],
		"/main/presenter/download-legacy": [15,[2]],
		"/main/presenter/download": [14,[2]],
		"/main/presenter/privacy-policy": [16,[2]],
		"/main/presenter/support-url": [17,[2]],
		"/main/presenter/waitlist": [18,[2]],
		"/main/privacy-policy": [19,[2]],
		"/main/projects": [20,[2]],
		"/me/blog": [21,[3,4]],
		"/me/contact": [~22,[3]],
		"/me/home": [23,[3,5]],
		"/me/landing/social": [24,[3,6]],
		"/personal/home": [25,[7]],
		"/products/home": [26,[8]],
		"/terminal": [~27],
		"/terminal/[route]": [28],
		"/tts": [29]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';