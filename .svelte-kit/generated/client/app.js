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
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [~7],
		"/main/contact": [8,[2]],
		"/main/home-dev": [10,[2]],
		"/main/home": [9,[2]],
		"/main/newsletter": [11,[2]],
		"/main/presenter/download": [12,[2]],
		"/main/presenter/privacy-policy": [13,[2]],
		"/main/presenter/waitlist": [14,[2]],
		"/main/privacy-policy": [15,[2]],
		"/me/blog": [16,[3,4]],
		"/me/contact": [~17,[3]],
		"/me/home": [18,[3,5]],
		"/me/landing/social": [19,[3,6]],
		"/tts": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';