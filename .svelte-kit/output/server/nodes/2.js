

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.cab77c7f.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/paths.7ddff47d.js","_app/immutable/chunks/RawButton.4753c507.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/SmallParagraph.a269a667.js"];
export const stylesheets = ["_app/immutable/assets/global.f841f7e3.css"];
export const fonts = [];
