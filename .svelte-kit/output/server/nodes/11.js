

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.98c08822.js","_app/immutable/chunks/index.35b8ce9f.js","_app/immutable/chunks/state.dba43285.js","_app/immutable/chunks/index.b94acf3e.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
