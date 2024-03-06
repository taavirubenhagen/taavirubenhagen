

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.49da3772.js","_app/immutable/chunks/index.38f42238.js"];
export const stylesheets = [];
export const fonts = [];
