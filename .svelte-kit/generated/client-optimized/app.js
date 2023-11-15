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

export const server_loads = [0,2];

export const dictionary = {
		"/": [9],
		"/home": [10,[2]],
		"/main/contact": [11,[3]],
		"/main/home-dev": [13,[3]],
		"/main/home": [12,[3]],
		"/main/newsletter": [14,[3]],
		"/main/presenter/download-legacy": [16,[3]],
		"/main/presenter/download": [15,[3]],
		"/main/presenter/privacy-policy": [17,[3]],
		"/main/presenter/support-url": [18,[3]],
		"/main/presenter/waitlist": [19,[3]],
		"/main/privacy-policy": [20,[3]],
		"/main/projects": [21,[3]],
		"/me/blog": [22,[4,5]],
		"/me/contact": [~23,[4]],
		"/me/home": [24,[4,6]],
		"/me/landing/social": [25,[4,7]],
		"/personal/home": [26,[8]],
		"/terminal": [~27],
		"/terminal/[route]": [28],
		"/tts": [29]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';