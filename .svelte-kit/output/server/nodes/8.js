

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/coming-soon/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.adf3824a.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.506ab6e0.js","_app/immutable/chunks/LargeHeading.b66fff84.js","_app/immutable/chunks/Section.3146adab.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.9a550ba1.css"];
export const fonts = [];
