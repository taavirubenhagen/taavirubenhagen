

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/hoffmanns-schuppen/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.d092d0fe.js","_app/immutable/chunks/index.84ea942b.js"];
export const stylesheets = [];
export const fonts = [];
