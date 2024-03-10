

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.cca79c24.js","_app/immutable/chunks/index.80fa91c9.js"];
export const stylesheets = [];
export const fonts = [];
