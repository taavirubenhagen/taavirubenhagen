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

export const server_loads = [0,2];

export const dictionary = {
		"/": [8],
		"/home": [9,[2]],
		"/main/contact": [10,[3]],
		"/main/home-dev": [12,[3]],
		"/main/home": [11,[3]],
		"/main/newsletter": [13,[3]],
		"/main/presenter/download-legacy": [15,[3]],
		"/main/presenter/download": [14,[3]],
		"/main/presenter/privacy-policy": [16,[3]],
		"/main/presenter/support-url": [17,[3]],
		"/main/presenter/waitlist": [18,[3]],
		"/main/privacy-policy": [19,[3]],
		"/me/blog": [20,[4,5]],
		"/me/contact": [~21,[4]],
		"/me/home": [22,[4,6]],
		"/me/landing/social": [23,[4,7]],
		"/tts": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';