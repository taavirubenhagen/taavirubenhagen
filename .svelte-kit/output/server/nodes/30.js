

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/30.33e5b739.js","_app/immutable/chunks/index.6f53fbaf.js"];
export const stylesheets = [];
export const fonts = [];
