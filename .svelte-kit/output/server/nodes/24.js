

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/24.0417dfa2.js","_app/immutable/chunks/index.128d686f.js"];
export const stylesheets = [];
export const fonts = [];
