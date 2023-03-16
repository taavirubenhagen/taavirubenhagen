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
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27')];

export const server_loads = [];

export const dictionary = {
	"/": [~10],
	"/beta/fenni": [11,[2]],
	"/beta/three": [12],
	"/contact": [13,[3]],
	"/dropshipz": [~14,[4],[5]],
	"/dropshipz/home": [15,[4],[5]],
	"/dropshipz/shop": [16,[4],[5]],
	"/fenni/blog/admin/post": [17],
	"/me/contact": [~18,[6]],
	"/me/design/tavy/icons": [19,[6]],
	"/me/design/tavy/icons/explore": [20,[6]],
	"/me/home": [21,[6,7]],
	"/me/landing/social": [22,[6,8]],
	"/presenter/web/[id]": [23],
	"/tts": [26],
	"/t/0": [~24],
	"/t/1": [~25],
	"/work": [27,[9]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';