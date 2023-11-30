import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.afbcffcf.js","_app/immutable/chunks/index.6efdc3e5.js","_app/immutable/chunks/DeviceDetector.3455763b.js","_app/immutable/chunks/ua-parser.6bd6a00c.js","_app/immutable/chunks/paths.6d510c1a.js","_app/immutable/chunks/state.fdea7c65.js","_app/immutable/chunks/index.d0b46775.js","_app/immutable/chunks/Button.28801abc.js","_app/immutable/chunks/icon.e71bffab.js","_app/immutable/chunks/RawButton.bd06f1b3.js"];
export const stylesheets = ["_app/immutable/assets/global.be26f52d.css"];
export const fonts = [];
