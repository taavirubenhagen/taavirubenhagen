

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/26.9017c543.js","_app/immutable/chunks/index.128d686f.js"];
export const stylesheets = [];
export const fonts = [];
