

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.84c17762.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/paths.6e849140.js","_app/immutable/chunks/RawButton.ed944c78.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/SmallHeading.60d57d7b.js"];
export const stylesheets = ["_app/immutable/assets/global.71916f15.css"];
export const fonts = [];
