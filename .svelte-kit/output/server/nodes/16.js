

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.4d468283.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/LargeHeading.6631cb3e.js","_app/immutable/chunks/paths.7d77a03b.js","_app/immutable/chunks/Section.7a78c67d.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
