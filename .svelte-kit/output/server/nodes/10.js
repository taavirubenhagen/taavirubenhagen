

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/hoffmanns-schuppen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.c5b10d60.js","_app/immutable/chunks/index.80fa91c9.js"];
export const stylesheets = [];
export const fonts = [];
