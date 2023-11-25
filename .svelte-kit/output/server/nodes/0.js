import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.f39d77ef.js","_app/immutable/chunks/index.e6c62ba9.js","_app/immutable/chunks/DeviceDetector.05240c66.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.49ab9464.js","_app/immutable/chunks/singletons.7d9c0525.js","_app/immutable/chunks/index.13562b6e.js","_app/immutable/chunks/state.a52b6b88.js"];
export const stylesheets = ["_app/immutable/assets/global.fc7e8383.css"];
export const fonts = [];
