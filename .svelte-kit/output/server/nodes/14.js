

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/tts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/14.01e93aae.js","_app/immutable/chunks/index.1392673c.js"];
export const stylesheets = [];
export const fonts = [];
