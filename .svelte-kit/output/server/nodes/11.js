

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.c0b2e387.js","_app/immutable/chunks/index.1392673c.js","_app/immutable/chunks/state.f5cc2a9e.js","_app/immutable/chunks/index.5385f864.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
