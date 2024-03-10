

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/coming-soon/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ee2f412e.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.da195932.js","_app/immutable/chunks/LargeHeading.e57bcbae.js","_app/immutable/chunks/Section.60162e25.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
