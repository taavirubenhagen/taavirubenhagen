

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/27.0e8f7817.js","_app/immutable/chunks/index.c47c8e85.js"];
export const stylesheets = [];
export const fonts = [];
