

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/download/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/30.e9c5c1b9.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.da195932.js","_app/immutable/chunks/SmallParagraph.1bd1a965.js","_app/immutable/chunks/LargeHeading.e57bcbae.js","_app/immutable/chunks/Section.ab5f12df.js","_app/immutable/chunks/Button.7d9bc549.js","_app/immutable/chunks/MediumParagraph.9d528434.js","_app/immutable/chunks/icon.a261e4c3.js","_app/immutable/chunks/RawButton.773cee34.js","_app/immutable/chunks/index.39ab129f.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
