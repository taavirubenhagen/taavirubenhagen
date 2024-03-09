

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.068a9f81.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/stores.7d52d881.js","_app/immutable/chunks/singletons.9b0fae30.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/paths.255c40c8.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/SmallHeading.66f19b99.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
