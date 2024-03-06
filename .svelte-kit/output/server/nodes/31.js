

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/31.17d3e427.js","_app/immutable/chunks/index.38f42238.js"];
export const stylesheets = [];
export const fonts = [];
