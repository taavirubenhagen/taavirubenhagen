

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.a6bb37d1.js","_app/immutable/chunks/index.140d9f15.js"];
export const stylesheets = [];
export const fonts = [];
