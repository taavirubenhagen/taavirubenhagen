

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3d347442.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.68212d1b.js","_app/immutable/chunks/LargeHeading.322d9247.js","_app/immutable/chunks/Section.45fee6df.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
