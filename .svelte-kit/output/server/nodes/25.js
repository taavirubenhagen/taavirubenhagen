

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.40e1db83.js","_app/immutable/chunks/index.38f42238.js","_app/immutable/chunks/LargeHeading.686f01d7.js","_app/immutable/chunks/paths.5e899fc7.js","_app/immutable/chunks/Section.b6305638.js"];
export const stylesheets = ["_app/immutable/assets/global.82877781.css"];
export const fonts = [];
