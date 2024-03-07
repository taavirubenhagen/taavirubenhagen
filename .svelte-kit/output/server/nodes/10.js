

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.73a375a6.js","_app/immutable/chunks/index.1f336de1.js","_app/immutable/chunks/state.2a2fd8b4.js","_app/immutable/chunks/index.703c138a.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.473de76d.js"];
export const stylesheets = ["_app/immutable/assets/global.c0e8d9fc.css"];
export const fonts = [];
