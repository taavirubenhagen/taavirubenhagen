

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/presenter/download/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.1d03f2e0.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/SmallParagraph.a361a6a7.js","_app/immutable/chunks/LargeHeading.c9438f3c.js","_app/immutable/chunks/paths.fbc18c21.js","_app/immutable/chunks/Button.a614d494.js","_app/immutable/chunks/RawButton.af5d6688.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/Page.d3d4a37d.js","_app/immutable/chunks/stores.e26bbc4c.js","_app/immutable/chunks/singletons.c29f17cf.js","_app/immutable/chunks/Section.725124c0.js"];
export const stylesheets = ["_app/immutable/assets/global.a693be3f.css"];
export const fonts = [];
