import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.a37eefa8.js","_app/immutable/chunks/index.6efdc3e5.js","_app/immutable/chunks/DeviceDetector.3455763b.js","_app/immutable/chunks/ua-parser.6bd6a00c.js","_app/immutable/chunks/paths.7ffaf380.js","_app/immutable/chunks/state.fdea7c65.js","_app/immutable/chunks/index.d0b46775.js","_app/immutable/chunks/Button.74637705.js","_app/immutable/chunks/icon.e71bffab.js","_app/immutable/chunks/RawButton.5a84e6f9.js"];
export const stylesheets = ["_app/immutable/assets/global.9156704a.css"];
export const fonts = [];
