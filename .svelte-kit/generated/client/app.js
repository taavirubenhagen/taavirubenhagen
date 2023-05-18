export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
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
	() => import('./nodes/18')];

export const server_loads = [];

export const dictionary = {
	"/": [~9],
	"/contact": [10,[2]],
	"/dropshipz": [~11,[3],[4]],
	"/dropshipz/home": [12,[3],[4]],
	"/dropshipz/shop": [13,[3],[4]],
	"/me/blog": [14,[5,6]],
	"/me/contact": [~15,[5]],
	"/me/home": [16,[5,7]],
	"/me/landing/social": [17,[5,8]],
	"/tts": [18]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';