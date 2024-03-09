

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/26.4555c1b5.js","_app/immutable/chunks/index.7b7993cb.js"];
export const stylesheets = [];
export const fonts = [];
