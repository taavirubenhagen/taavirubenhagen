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
	() => import('./nodes/27')
];

export const server_loads = [0];

export const dictionary = {
		"/": [7],
		"/home": [8],
		"/main/contact": [9,[2]],
		"/main/home-dev": [11,[2]],
		"/main/home": [10,[2]],
		"/main/newsletter": [12,[2]],
		"/main/presenter/download-legacy": [14,[2]],
		"/main/presenter/download": [13,[2]],
		"/main/presenter/privacy-policy": [15,[2]],
		"/main/presenter/support-url": [16,[2]],
		"/main/presenter/waitlist": [17,[2]],
		"/main/privacy-policy": [18,[2]],
		"/main/projects": [19,[2]],
		"/me/blog": [20,[3,4]],
		"/me/contact": [~21,[3]],
		"/me/home": [22,[3]],
		"/personal/home": [23,[5]],
		"/products": [24,[6]],
		"/terminal": [~25],
		"/terminal/[route]": [26],
		"/tts": [27]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';