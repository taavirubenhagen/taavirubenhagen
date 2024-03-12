

export const index = 33;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/waitlist/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/33.389b7bf3.js","_app/immutable/chunks/index.84ea942b.js"];
export const stylesheets = [];
export const fonts = [];
