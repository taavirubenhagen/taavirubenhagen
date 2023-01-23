export { matchers } from './client-matchers.js';

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
	() => import('./nodes/11')];

export const server_loads = [];

export const dictionary = {
	"/": [~5],
	"/contact": [6,[2]],
	"/fenni/blog/admin/post": [7],
	"/home": [8,[3]],
	"/presenter/web/[id]": [9],
	"/three": [10],
	"/work": [11,[4]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};