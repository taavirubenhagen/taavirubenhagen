

export const index = 33;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/33.72bbc178.js","_app/immutable/chunks/index.f795e419.js"];
export const stylesheets = [];
export const fonts = [];
