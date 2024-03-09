

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9b7fada1.js","_app/immutable/chunks/index.f795e419.js","_app/immutable/chunks/stores.d1790f43.js","_app/immutable/chunks/singletons.ce4b25b0.js","_app/immutable/chunks/index.c4183f15.js","_app/immutable/chunks/paths.69963903.js","_app/immutable/chunks/RawButton.d7bff77b.js","_app/immutable/chunks/SmallHeading.e83667af.js"];
export const stylesheets = ["_app/immutable/assets/global.eda23f50.css"];
export const fonts = [];
