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
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')];

export const server_loads = [];

export const dictionary = {
	"/": [~7],
	"/beta/fenni": [8,[2]],
	"/beta/three": [9],
	"/contact": [10,[3]],
	"/fenni/blog/admin/post": [11],
	"/me/design/tavy/icons": [12,[4]],
	"/me/design/tavy/icons/explore": [13,[4]],
	"/me/home": [14,[4,5]],
	"/presenter/web/[id]": [15],
	"/tts": [16],
	"/work": [17,[6]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};