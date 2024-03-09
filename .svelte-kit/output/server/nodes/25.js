

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.5a64b7f6.js","_app/immutable/chunks/index.a46aface.js"];
export const stylesheets = [];
export const fonts = [];
