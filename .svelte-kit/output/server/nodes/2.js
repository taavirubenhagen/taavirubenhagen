

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0b66d610.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/paths.4c29315e.js","_app/immutable/chunks/Button.ca9309b3.js","_app/immutable/chunks/RawButton.5d5b2660.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/ButtonSeperator.b20e3f24.js","_app/immutable/chunks/Page.a84ad81d.js","_app/immutable/chunks/stores.418c8d48.js","_app/immutable/chunks/singletons.2f3e9013.js","_app/immutable/chunks/Section.bcbd88fc.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
