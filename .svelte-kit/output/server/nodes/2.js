

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f9b6fbc0.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/paths.d803d376.js","_app/immutable/chunks/RawButton.be12d68b.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/SmallParagraph.e7c145b8.js"];
export const stylesheets = ["_app/immutable/assets/global.06d7174b.css"];
export const fonts = [];
