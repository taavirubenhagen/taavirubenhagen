

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/tts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.5309080c.js","_app/immutable/chunks/index.3ab1d97b.js"];
export const stylesheets = [];
export const fonts = [];
