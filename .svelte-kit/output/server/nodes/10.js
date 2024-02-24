

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.401cbb3d.js","_app/immutable/chunks/index.4ce69c25.js","_app/immutable/chunks/state.6b87bbcc.js","_app/immutable/chunks/index.fb74aaef.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.f426c695.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
