

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.0fcb6e2a.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/state.4242929e.js","_app/immutable/chunks/index.2f0bf968.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
