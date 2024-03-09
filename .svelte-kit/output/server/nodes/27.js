

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/27.5868ae68.js","_app/immutable/chunks/index.78ed22c3.js"];
export const stylesheets = [];
export const fonts = [];
