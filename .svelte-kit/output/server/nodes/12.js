

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.8d4422f7.js","_app/immutable/chunks/index.148ea34d.js"];
export const stylesheets = [];
export const fonts = [];
