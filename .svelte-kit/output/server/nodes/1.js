

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.841bced0.js","_app/immutable/chunks/index.9e5a1b15.js","_app/immutable/chunks/LargeHeading.8dd8cc41.js","_app/immutable/chunks/paths.f03895f2.js","_app/immutable/chunks/Page.a541a787.js","_app/immutable/chunks/stores.d0136f4e.js","_app/immutable/chunks/singletons.db52e022.js","_app/immutable/chunks/index.95425f24.js","_app/immutable/chunks/SmallParagraph.7aec6b39.js","_app/immutable/chunks/RawButton.9ca990fc.js","_app/immutable/chunks/state.c5884cbc.js","_app/immutable/chunks/Section.f22c2715.js"];
export const stylesheets = ["_app/immutable/assets/global.159ef71b.css"];
export const fonts = [];
