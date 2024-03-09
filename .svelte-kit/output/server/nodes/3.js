

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.640740ce.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/paths.255c40c8.js","_app/immutable/chunks/Button.75dc1dfa.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/ButtonSeperator.5e16cad8.js","_app/immutable/chunks/Page.b2ffbe88.js","_app/immutable/chunks/stores.7d52d881.js","_app/immutable/chunks/singletons.9b0fae30.js","_app/immutable/chunks/SmallParagraph.ae1f4329.js","_app/immutable/chunks/Section.c04fc9dd.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
