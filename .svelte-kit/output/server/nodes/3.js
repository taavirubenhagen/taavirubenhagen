

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.144370ca.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/paths.16cdd4b2.js","_app/immutable/chunks/Button.10a2626a.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/ButtonSeperator.3f3d3560.js","_app/immutable/chunks/Page.b63c8ef6.js","_app/immutable/chunks/stores.6c9b6eda.js","_app/immutable/chunks/singletons.64124e76.js","_app/immutable/chunks/SmallParagraph.ae1f4329.js","_app/immutable/chunks/Section.c04fc9dd.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
