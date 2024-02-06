

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/support-url/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/22.9db0c1bb.js","_app/immutable/chunks/index.148ea34d.js"];
export const stylesheets = [];
export const fonts = [];
