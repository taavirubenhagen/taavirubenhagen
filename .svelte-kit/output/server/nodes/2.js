

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2c678969.js","_app/immutable/chunks/index.a46aface.js","_app/immutable/chunks/paths.810aefbb.js","_app/immutable/chunks/RawButton.88861599.js","_app/immutable/chunks/index.26562532.js","_app/immutable/chunks/SmallHeading.646bf36e.js"];
export const stylesheets = ["_app/immutable/assets/global.71916f15.css"];
export const fonts = [];
