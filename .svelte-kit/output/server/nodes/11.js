

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.a81509ce.js","_app/immutable/chunks/index.e9c5c64a.js","_app/immutable/chunks/state.03dfb7d4.js","_app/immutable/chunks/index.a8b9ede1.js"];
export const stylesheets = ["_app/immutable/assets/global.865ec020.css"];
export const fonts = [];
