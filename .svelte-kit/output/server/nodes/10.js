

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/hoffmanns-schuppen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.cc3495c9.js","_app/immutable/chunks/index.f57fbee0.js"];
export const stylesheets = [];
export const fonts = [];
