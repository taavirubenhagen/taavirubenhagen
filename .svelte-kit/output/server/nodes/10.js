

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.717cd7d8.js","_app/immutable/chunks/index.38f42238.js","_app/immutable/chunks/state.9f8584fa.js","_app/immutable/chunks/index.dac91cf7.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/O1.f4841785.js"];
export const stylesheets = ["_app/immutable/assets/global.82877781.css"];
export const fonts = [];
