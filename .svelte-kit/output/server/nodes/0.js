import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.a3baa210.js","_app/immutable/chunks/index.f3cbe732.js","_app/immutable/chunks/DeviceDetector.c887582a.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.d999c8be.js","_app/immutable/chunks/singletons.33077353.js","_app/immutable/chunks/index.eef167b7.js","_app/immutable/chunks/state.bc6b7810.js","_app/immutable/chunks/Button.de1f53c7.js","_app/immutable/chunks/RawButton.66fc95c5.js"];
export const stylesheets = ["_app/immutable/assets/global.9bb300c6.css"];
export const fonts = [];
