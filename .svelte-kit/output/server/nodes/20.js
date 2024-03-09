

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.1762101a.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/LargeHeading.1d11bed2.js","_app/immutable/chunks/paths.257b0bc6.js","_app/immutable/chunks/Section.491f0076.js"];
export const stylesheets = ["_app/immutable/assets/global.0412281e.css"];
export const fonts = [];
