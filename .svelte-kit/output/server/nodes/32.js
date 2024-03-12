

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.e3662e6b.js","_app/immutable/chunks/index.84ea942b.js"];
export const stylesheets = [];
export const fonts = [];
