

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/sticker/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/31.b7b6bf16.js","_app/immutable/chunks/index.84ea942b.js"];
export const stylesheets = [];
export const fonts = [];
