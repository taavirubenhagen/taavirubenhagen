

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.3e61ec6c.js","_app/immutable/chunks/index.6f53fbaf.js"];
export const stylesheets = [];
export const fonts = [];
