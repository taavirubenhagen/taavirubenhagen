import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.c6ac4be5.js","_app/immutable/chunks/index.2613787b.js","_app/immutable/chunks/DeviceDetector.242ba993.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.6002c9f5.js","_app/immutable/chunks/singletons.c7c78597.js","_app/immutable/chunks/index.74e7d992.js","_app/immutable/chunks/state.85f477cb.js"];
export const stylesheets = ["_app/immutable/assets/global.f84f0db1.css"];
export const fonts = [];
