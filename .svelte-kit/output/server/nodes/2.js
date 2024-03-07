

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8ed2fdf0.js","_app/immutable/chunks/index.1f336de1.js","_app/immutable/chunks/paths.af8a74b6.js","_app/immutable/chunks/Button.ba3f0e9c.js","_app/immutable/chunks/RawButton.293de0f1.js","_app/immutable/chunks/state.2a2fd8b4.js","_app/immutable/chunks/index.703c138a.js","_app/immutable/chunks/ButtonSeperator.f363c9db.js","_app/immutable/chunks/Page.8ac863f4.js","_app/immutable/chunks/stores.0304c590.js","_app/immutable/chunks/singletons.7e9140bc.js","_app/immutable/chunks/SmallParagraph.6009eb10.js","_app/immutable/chunks/Section.62b88ac5.js"];
export const stylesheets = ["_app/immutable/assets/global.c0e8d9fc.css"];
export const fonts = [];
