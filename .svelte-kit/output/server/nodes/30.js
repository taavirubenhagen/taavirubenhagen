

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/download/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/30.dd2516c5.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.ce0f440b.js","_app/immutable/chunks/SmallParagraph.faf86b72.js","_app/immutable/chunks/LargeHeading.011e33f7.js","_app/immutable/chunks/Section.5ed59174.js","_app/immutable/chunks/Button.d8d35b7e.js","_app/immutable/chunks/MediumParagraph.2b73094e.js","_app/immutable/chunks/icon.f705ef6d.js","_app/immutable/chunks/RawButton.f5238f65.js","_app/immutable/chunks/index.39ab129f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.21fc8f9b.css"];
export const fonts = [];
