

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/legal/privacy-policy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.2ed3e7ce.js","_app/immutable/chunks/index.6f53fbaf.js","_app/immutable/chunks/LargeHeading.30cf0aec.js","_app/immutable/chunks/paths.bc425584.js","_app/immutable/chunks/Section.1284b91b.js"];
export const stylesheets = ["_app/immutable/assets/global.7e946c0c.css"];
export const fonts = [];
