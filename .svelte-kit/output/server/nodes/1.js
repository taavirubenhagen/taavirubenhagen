

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6ad45b5e.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.da195932.js","_app/immutable/chunks/LargeHeading.e57bcbae.js","_app/immutable/chunks/Section.ab5f12df.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
