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
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [~10],
		"/contact": [11,[2]],
		"/dropshipz": [~12,[3],[4]],
		"/dropshipz/home": [13,[3],[4]],
		"/dropshipz/shop": [14,[3],[4]],
		"/me/blog": [15,[5,6]],
		"/me/contact": [~16,[5]],
		"/me/home": [17,[5,7]],
		"/me/landing/social": [18,[5,8]],
		"/portfolio/home": [19,[9]],
		"/presenter/waitlist": [20],
		"/supabase-test": [21],
		"/tts": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';