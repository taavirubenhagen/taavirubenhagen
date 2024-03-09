

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.89dede75.js","_app/immutable/chunks/index.f57fbee0.js","_app/immutable/chunks/LargeHeading.ff55bed0.js","_app/immutable/chunks/paths.c9d48398.js","_app/immutable/chunks/Section.47250a10.js"];
export const stylesheets = ["_app/immutable/assets/global.eed57195.css"];
export const fonts = [];
