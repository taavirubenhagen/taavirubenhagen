

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.6030a9ed.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/LargeHeading.01e10e02.js","_app/immutable/chunks/paths.255c40c8.js","_app/immutable/chunks/Section.c04fc9dd.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
