

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/24.3fa97938.js","_app/immutable/chunks/index.f57fbee0.js"];
export const stylesheets = [];
export const fonts = [];
