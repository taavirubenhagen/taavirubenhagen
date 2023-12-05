

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.ffab93a0.js","_app/immutable/chunks/index.35b8ce9f.js","_app/immutable/chunks/LargeHeading.f6bbb567.js","_app/immutable/chunks/paths.31700428.js","_app/immutable/chunks/Section.b31ef7ba.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
