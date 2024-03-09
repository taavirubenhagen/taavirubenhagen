

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.cf0ab943.js","_app/immutable/chunks/index.78ed22c3.js"];
export const stylesheets = [];
export const fonts = [];
