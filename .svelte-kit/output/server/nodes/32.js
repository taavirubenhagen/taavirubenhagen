

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.50a0d7e3.js","_app/immutable/chunks/index.80fa91c9.js"];
export const stylesheets = [];
export const fonts = [];
