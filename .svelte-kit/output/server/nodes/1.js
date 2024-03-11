

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1f7d92fd.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.ce0f440b.js","_app/immutable/chunks/LargeHeading.011e33f7.js","_app/immutable/chunks/Section.5ed59174.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.21fc8f9b.css"];
export const fonts = [];
