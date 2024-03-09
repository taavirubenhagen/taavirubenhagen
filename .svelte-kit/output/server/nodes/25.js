

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.ba52795d.js","_app/immutable/chunks/index.f795e419.js","_app/immutable/chunks/LargeHeading.b0f183f4.js","_app/immutable/chunks/paths.330c9fa6.js","_app/immutable/chunks/Section.ff569156.js"];
export const stylesheets = ["_app/immutable/assets/global.eda23f50.css"];
export const fonts = [];
