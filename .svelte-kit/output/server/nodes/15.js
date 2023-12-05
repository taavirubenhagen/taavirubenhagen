

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.d1ba2ac6.js","_app/immutable/chunks/index.e9c5c64a.js","_app/immutable/chunks/LargeHeading.87ca1910.js","_app/immutable/chunks/paths.a2004289.js","_app/immutable/chunks/Section.75b1d9c9.js"];
export const stylesheets = ["_app/immutable/assets/global.865ec020.css"];
export const fonts = [];
