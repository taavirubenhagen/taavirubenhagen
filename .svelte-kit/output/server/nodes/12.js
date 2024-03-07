

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/main/newsletter/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.f186a391.js","_app/immutable/chunks/index.1f336de1.js"];
export const stylesheets = [];
export const fonts = [];
