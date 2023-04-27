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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24')];

export const server_loads = [];

export const dictionary = {
	"/": [~9],
	"/beta/three": [10],
	"/contact": [11,[2]],
	"/dropshipz": [~12,[3],[4]],
	"/dropshipz/home": [13,[3],[4]],
	"/dropshipz/shop": [14,[3],[4]],
	"/fenni/blog/admin/post": [15],
	"/me/contact": [~16,[5]],
	"/me/design/tavy/icons": [17,[5]],
	"/me/design/tavy/icons/explore": [18,[5]],
	"/me/home": [19,[5,6]],
	"/me/landing/social": [20,[5,7]],
	"/tts": [23],
	"/t/0": [~21],
	"/t/1": [~22],
	"/work": [24,[8]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';