

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.16fb21a9.js","_app/immutable/chunks/index.3ab1d97b.js"];
export const stylesheets = [];
export const fonts = [];
