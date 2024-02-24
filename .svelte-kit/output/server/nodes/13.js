

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.5655c085.js","_app/immutable/chunks/index.4ce69c25.js","_app/immutable/chunks/state.6b87bbcc.js","_app/immutable/chunks/index.fb74aaef.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
