

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.e743e47b.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/LargeHeading.3b44ac89.js","_app/immutable/chunks/paths.c73a8013.js","_app/immutable/chunks/Section.59ff8ae2.js"];
export const stylesheets = ["_app/immutable/assets/global.af0f84f6.css"];
export const fonts = [];
