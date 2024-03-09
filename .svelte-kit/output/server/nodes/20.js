

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.0460f824.js","_app/immutable/chunks/index.7b7993cb.js"];
export const stylesheets = [];
export const fonts = [];
