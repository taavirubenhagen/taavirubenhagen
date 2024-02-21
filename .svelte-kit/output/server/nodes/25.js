

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.8d4422f7.js","_app/immutable/chunks/index.148ea34d.js"];
export const stylesheets = [];
export const fonts = [];
