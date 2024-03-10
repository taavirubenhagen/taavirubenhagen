

export const index = 34;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/34.890e7141.js","_app/immutable/chunks/index.80fa91c9.js"];
export const stylesheets = [];
export const fonts = [];
