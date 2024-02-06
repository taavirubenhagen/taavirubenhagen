

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.d9a7de73.js","_app/immutable/chunks/index.8c467964.js","_app/immutable/chunks/state.204f6a1d.js","_app/immutable/chunks/index.f16e3478.js"];
export const stylesheets = ["_app/immutable/assets/global.94baccd2.css"];
export const fonts = [];
