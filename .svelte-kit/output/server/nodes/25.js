

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.950b2194.js","_app/immutable/chunks/index.128d686f.js"];
export const stylesheets = [];
export const fonts = [];
