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
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [~7],
		"/me/blog": [8,[2,3]],
		"/me/contact": [~9,[2]],
		"/me/home": [10,[2,4]],
		"/me/landing/social": [11,[2,5]],
		"/portfolio/home": [12,[6]],
		"/portfolio/newsletter": [13,[6]],
		"/presenter/waitlist": [14],
		"/supabase-test": [15],
		"/tts": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';