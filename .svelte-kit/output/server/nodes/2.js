

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.81b1b1b5.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/paths.6f99a3b2.js","_app/immutable/chunks/Button.30e3f0c0.js","_app/immutable/chunks/RawButton.fa2300e0.js","_app/immutable/chunks/state.4242929e.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/ButtonSeperator.f4a7b2af.js","_app/immutable/chunks/InlineButton.92965395.js","_app/immutable/chunks/stores.fd4795ef.js","_app/immutable/chunks/singletons.ca7ce58e.js","_app/immutable/chunks/Section.7a78c67d.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
