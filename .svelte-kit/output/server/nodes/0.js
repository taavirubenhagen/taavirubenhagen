

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1a0b3cfc.js","_app/immutable/chunks/index.140d9f15.js","_app/immutable/chunks/state.aa844a84.js","_app/immutable/chunks/index.ba2cbadf.js","_app/immutable/chunks/DeviceDetector.4cf5e772.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/paths.8a658f01.js","_app/immutable/chunks/Button.e13a38e2.js","_app/immutable/chunks/RawButton.cdc9826a.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
