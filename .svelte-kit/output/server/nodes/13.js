

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.6be5b438.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/index.241df983.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
