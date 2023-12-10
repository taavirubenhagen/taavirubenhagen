

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/privacy-policy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.bf0fbf18.js","_app/immutable/chunks/index.140d9f15.js","_app/immutable/chunks/LargeHeading.5aa5f1be.js","_app/immutable/chunks/paths.8a658f01.js","_app/immutable/chunks/Section.fc537183.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
