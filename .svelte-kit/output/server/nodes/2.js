

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.095bc6c9.js","_app/immutable/chunks/index.1392673c.js","_app/immutable/chunks/paths.10b039bb.js","_app/immutable/chunks/Button.f7475906.js","_app/immutable/chunks/RawButton.a70034b9.js","_app/immutable/chunks/state.f5cc2a9e.js","_app/immutable/chunks/index.5385f864.js","_app/immutable/chunks/ButtonSeperator.7c7d2a49.js","_app/immutable/chunks/Page.839d4acb.js","_app/immutable/chunks/stores.d3bdc6f3.js","_app/immutable/chunks/singletons.771fc8b5.js","_app/immutable/chunks/Section.7461f5b2.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
