

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.f9e93926.js","_app/immutable/chunks/index.1392673c.js","_app/immutable/chunks/LargeHeading.9f5fec2d.js","_app/immutable/chunks/paths.4aba8c66.js","_app/immutable/chunks/Section.7461f5b2.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
