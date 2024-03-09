

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/politics/jugendparlament/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.0ed9b33a.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/RawButton.be12d68b.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/paths.d803d376.js","_app/immutable/chunks/Section.4d6b7fe1.js"];
export const stylesheets = ["_app/immutable/assets/global.06d7174b.css"];
export const fonts = [];
