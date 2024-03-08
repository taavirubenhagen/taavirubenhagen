

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/31.2bd81306.js","_app/immutable/chunks/index.6f53fbaf.js"];
export const stylesheets = [];
export const fonts = [];
