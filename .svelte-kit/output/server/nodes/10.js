

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.65429f66.js","_app/immutable/chunks/index.8c467964.js","_app/immutable/chunks/state.204f6a1d.js","_app/immutable/chunks/index.f16e3478.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.9e5dfe17.js"];
export const stylesheets = ["_app/immutable/assets/global.94baccd2.css"];
export const fonts = [];
