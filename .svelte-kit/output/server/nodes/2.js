

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.991907d2.js","_app/immutable/chunks/index.140d9f15.js","_app/immutable/chunks/paths.8a658f01.js","_app/immutable/chunks/Button.e13a38e2.js","_app/immutable/chunks/RawButton.cdc9826a.js","_app/immutable/chunks/state.aa844a84.js","_app/immutable/chunks/index.ba2cbadf.js","_app/immutable/chunks/ButtonSeperator.3296a4f4.js","_app/immutable/chunks/InlineButton.fd0facd2.js","_app/immutable/chunks/stores.9197629a.js","_app/immutable/chunks/singletons.9f4b8a01.js","_app/immutable/chunks/Section.fc537183.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
