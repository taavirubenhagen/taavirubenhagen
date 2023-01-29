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
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')];

export const server_loads = [];

export const dictionary = {
	"/": [~6],
	"/contact": [7,[2]],
	"/fenni/blog/admin/post": [8],
	"/me/design/tavy/icons": [9,[3]],
	"/me/design/tavy/icons/explore": [10,[3]],
	"/me/home": [11,[3,4]],
	"/presenter/web/[id]": [12],
	"/three": [13],
	"/work": [14,[5]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};