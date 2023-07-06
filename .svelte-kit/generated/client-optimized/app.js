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
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [~8],
		"/fenni/home": [9,[2]],
		"/fenni/large": [10,[2]],
		"/me/blog": [11,[3,4]],
		"/me/contact": [~12,[3]],
		"/me/home": [13,[3,5]],
		"/me/landing/social": [14,[3,6]],
		"/portfolio/home": [15,[7]],
		"/portfolio/newsletter": [16,[7]],
		"/presenter/waitlist": [17],
		"/supabase-test": [18],
		"/tts": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';