

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/politics/jugendparlament/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.bdef9fc0.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/RawButton.4753c507.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/paths.7ddff47d.js","_app/immutable/chunks/Section.3388596d.js"];
export const stylesheets = ["_app/immutable/assets/global.f841f7e3.css"];
export const fonts = [];
