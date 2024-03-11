

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e39452b4.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.ce0f440b.js","_app/immutable/chunks/Section.5ed59174.js","_app/immutable/chunks/Button.d8d35b7e.js","_app/immutable/chunks/MediumParagraph.2b73094e.js","_app/immutable/chunks/icon.f705ef6d.js","_app/immutable/chunks/RawButton.f5238f65.js","_app/immutable/chunks/index.39ab129f.js","_app/immutable/chunks/ButtonSeperator.d12321f3.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.21fc8f9b.css"];
export const fonts = [];
