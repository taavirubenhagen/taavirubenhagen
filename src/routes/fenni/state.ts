import { writable } from 'svelte/store';
 
export const globalScrollY = writable(0);
export const cursorButtonHover = writable(false);
export const contrastingTextColorWhite = writable(true);