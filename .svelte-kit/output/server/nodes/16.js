

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/tts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.963e7950.js","_app/immutable/chunks/index.8c467964.js"];
export const stylesheets = [];
export const fonts = [];
