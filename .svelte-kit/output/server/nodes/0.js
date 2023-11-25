import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.8d43f92c.js","_app/immutable/chunks/index.e6c62ba9.js","_app/immutable/chunks/DeviceDetector.05240c66.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.985ede3e.js","_app/immutable/chunks/singletons.3c509c6b.js","_app/immutable/chunks/index.13562b6e.js","_app/immutable/chunks/state.a52b6b88.js"];
export const stylesheets = ["_app/immutable/assets/global.20e4d713.css"];
export const fonts = [];
