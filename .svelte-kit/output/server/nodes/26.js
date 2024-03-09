

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/26.6eaf66fe.js","_app/immutable/chunks/index.c47c8e85.js"];
export const stylesheets = [];
export const fonts = [];
