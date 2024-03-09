

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7871189b.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/stores.5c1b70bb.js","_app/immutable/chunks/singletons.e3c847b9.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/paths.57fc7ed3.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/SmallHeading.fcc92111.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
