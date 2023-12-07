

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/privacy-policy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.50022722.js","_app/immutable/chunks/index.35b8ce9f.js","_app/immutable/chunks/LargeHeading.f6bbb567.js","_app/immutable/chunks/paths.6e681172.js","_app/immutable/chunks/Section.b31ef7ba.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
