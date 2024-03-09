

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.1e83c472.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/LargeHeading.d1785358.js","_app/immutable/chunks/paths.43650e47.js","_app/immutable/chunks/Section.24a3ca0d.js"];
export const stylesheets = ["_app/immutable/assets/global.a8b2176a.css"];
export const fonts = [];
