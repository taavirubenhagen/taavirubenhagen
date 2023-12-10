import { writable } from 'svelte/store';
 
export const globalScrollY = writable(0);
export const cursorPosition = writable([0, 0]);
export const buttonHover = writable(false);