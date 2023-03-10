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
	() => import('./nodes/20')];

export const server_loads = [];

export const dictionary = {
	"/": [~8],
	"/beta/fenni": [9,[2]],
	"/beta/three": [10],
	"/contact": [11,[3]],
	"/fenni/blog/admin/post": [12],
	"/me/contact": [~13,[4]],
	"/me/design/tavy/icons": [14,[4]],
	"/me/design/tavy/icons/explore": [15,[4]],
	"/me/home": [16,[4,5]],
	"/me/landing/social": [17,[4,6]],
	"/presenter/web/[id]": [18],
	"/tts": [19],
	"/work": [20,[7]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';