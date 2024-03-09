

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.4ce33862.js","_app/immutable/chunks/index.c47c8e85.js"];
export const stylesheets = [];
export const fonts = [];
