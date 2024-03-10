

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.1791cb1a.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.da195932.js","_app/immutable/chunks/Section.60162e25.js","_app/immutable/chunks/Button.c11a186d.js","_app/immutable/chunks/MediumParagraph.9d528434.js","_app/immutable/chunks/icon.29d4689b.js","_app/immutable/chunks/RawButton.773cee34.js","_app/immutable/chunks/index.39ab129f.js","_app/immutable/chunks/ButtonSeperator.5b27af1f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
