

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9ac7a497.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/paths.426c780e.js","_app/immutable/chunks/Button.ad7d6029.js","_app/immutable/chunks/RawButton.af5d6688.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/ButtonSeperator.734ce048.js","_app/immutable/chunks/Page.530faad7.js","_app/immutable/chunks/stores.b9a305b9.js","_app/immutable/chunks/singletons.e862e256.js","_app/immutable/chunks/SmallParagraph.a361a6a7.js","_app/immutable/chunks/Section.725124c0.js"];
export const stylesheets = ["_app/immutable/assets/global.a693be3f.css"];
export const fonts = [];
