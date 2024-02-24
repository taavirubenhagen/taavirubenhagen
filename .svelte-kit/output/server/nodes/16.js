

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/tts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.0c6580fb.js","_app/immutable/chunks/index.4ce69c25.js"];
export const stylesheets = [];
export const fonts = [];
