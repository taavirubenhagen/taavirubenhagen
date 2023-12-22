

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.deda0b16.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/paths.337e5cb1.js","_app/immutable/chunks/Button.d47eed9d.js","_app/immutable/chunks/RawButton.c73a6f20.js","_app/immutable/chunks/state.4242929e.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/ButtonSeperator.9a3372b4.js","_app/immutable/chunks/InlineButton.1fc8c7f3.js","_app/immutable/chunks/stores.82156a9f.js","_app/immutable/chunks/singletons.baf5d1be.js","_app/immutable/chunks/Section.5b838618.js"];
export const stylesheets = ["_app/immutable/assets/global.5d288260.css"];
export const fonts = [];
