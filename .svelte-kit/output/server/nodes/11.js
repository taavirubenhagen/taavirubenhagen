

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.b1a81d0c.js","_app/immutable/chunks/index.140d9f15.js","_app/immutable/chunks/state.aa844a84.js","_app/immutable/chunks/index.ba2cbadf.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
