import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.cd4e2a92.js","_app/immutable/chunks/index.60da098c.js","_app/immutable/chunks/DeviceDetector.28898701.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.3e85e903.js","_app/immutable/chunks/singletons.ddc437f9.js","_app/immutable/chunks/index.e0b8dcd8.js","_app/immutable/chunks/state.9ffbbb15.js","_app/immutable/chunks/Button.7dbb94ef.js","_app/immutable/chunks/RawButton.6c96ecbb.js"];
export const stylesheets = ["_app/immutable/assets/global.a3987477.css"];
export const fonts = [];
