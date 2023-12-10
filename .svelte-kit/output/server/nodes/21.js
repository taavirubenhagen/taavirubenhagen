

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/21.5309080c.js","_app/immutable/chunks/index.3ab1d97b.js"];
export const stylesheets = [];
export const fonts = [];
