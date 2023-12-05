

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.19432961.js","_app/immutable/chunks/index.35b8ce9f.js"];
export const stylesheets = [];
export const fonts = [];
