

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.0afe5d3a.js","_app/immutable/chunks/index.e9c5c64a.js"];
export const stylesheets = [];
export const fonts = [];
