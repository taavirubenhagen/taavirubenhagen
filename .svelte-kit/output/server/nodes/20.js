

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/privacy-policy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.e0610374.js","_app/immutable/chunks/index.c47c8e85.js","_app/immutable/chunks/LargeHeading.bea3ca1f.js","_app/immutable/chunks/paths.a4701768.js","_app/immutable/chunks/Section.f3ad33d4.js"];
export const stylesheets = ["_app/immutable/assets/global.9938cb0d.css"];
export const fonts = [];
