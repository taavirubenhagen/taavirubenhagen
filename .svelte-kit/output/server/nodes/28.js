

export const index = 28;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/28.2b6d2691.js","_app/immutable/chunks/index.7b7993cb.js"];
export const stylesheets = [];
export const fonts = [];
