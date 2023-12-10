

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.bad9490a.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/LargeHeading.6631cb3e.js","_app/immutable/chunks/paths.c0e169d4.js","_app/immutable/chunks/Section.3257bf26.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
