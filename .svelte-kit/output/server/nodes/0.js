import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.8e69e99f.js","_app/immutable/chunks/index.ca0f68f9.js","_app/immutable/chunks/DeviceDetector.e8008be1.js","_app/immutable/chunks/ua-parser.6bd6a00c.js","_app/immutable/chunks/stores.9551fbbe.js","_app/immutable/chunks/singletons.b75e641b.js","_app/immutable/chunks/index.7be6ef96.js","_app/immutable/chunks/state.6a1a2822.js","_app/immutable/chunks/Button.775b4aa8.js","_app/immutable/chunks/RawButton.a6c2b3bc.js"];
export const stylesheets = ["_app/immutable/assets/global.fb7b4b88.css"];
export const fonts = [];
