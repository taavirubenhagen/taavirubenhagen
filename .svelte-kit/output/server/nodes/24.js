

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/24.153dfbf4.js","_app/immutable/chunks/index.4ce69c25.js"];
export const stylesheets = [];
export const fonts = [];