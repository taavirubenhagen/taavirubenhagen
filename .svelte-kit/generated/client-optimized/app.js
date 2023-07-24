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
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [~8],
		"/fenni/home": [9,[2]],
		"/fenni/projects": [10,[2]],
		"/fenni/projects/[name]": [11,[2]],
		"/me/blog": [12,[3,4]],
		"/me/contact": [~13,[3]],
		"/me/home": [14,[3,5]],
		"/me/landing/social": [15,[3,6]],
		"/portfolio/home": [16,[7]],
		"/portfolio/newsletter": [17,[7]],
		"/presenter/download/windows": [18],
		"/presenter/waitlist": [19],
		"/supabase-test": [20],
		"/tts": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';