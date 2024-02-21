

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.bd0845ed.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.2887bf7b.js"];
export const stylesheets = ["_app/immutable/assets/global.b3084c45.css"];
export const fonts = [];
