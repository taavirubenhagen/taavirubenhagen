

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.792a02eb.js","_app/immutable/chunks/index.78ed22c3.js","_app/immutable/chunks/LargeHeading.2f68d1ec.js","_app/immutable/chunks/paths.36523c55.js","_app/immutable/chunks/Section.dc9f226b.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
