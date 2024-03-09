

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5c1f92e4.js","_app/immutable/chunks/index.a46aface.js","_app/immutable/chunks/paths.518f4512.js","_app/immutable/chunks/RawButton.54180ef4.js","_app/immutable/chunks/index.26562532.js","_app/immutable/chunks/SmallHeading.2958a72d.js"];
export const stylesheets = ["_app/immutable/assets/global.8ffcc461.css"];
export const fonts = [];
