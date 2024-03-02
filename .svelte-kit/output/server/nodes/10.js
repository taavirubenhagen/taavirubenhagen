

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.c6960edb.js","_app/immutable/chunks/index.9e5a1b15.js","_app/immutable/chunks/state.c5884cbc.js","_app/immutable/chunks/index.95425f24.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.1ef7b4d3.js"];
export const stylesheets = ["_app/immutable/assets/global.159ef71b.css"];
export const fonts = [];
