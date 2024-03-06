

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.6eb087b7.js","_app/immutable/chunks/index.38f42238.js","_app/immutable/chunks/state.9f8584fa.js","_app/immutable/chunks/index.dac91cf7.js"];
export const stylesheets = ["_app/immutable/assets/global.82877781.css"];
export const fonts = [];
