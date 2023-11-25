import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.e8f138c5.js","_app/immutable/chunks/index.d7191f4d.js","_app/immutable/chunks/DeviceDetector.83fdface.js","_app/immutable/chunks/ua-parser.44220aa4.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/stores.e537869f.js","_app/immutable/chunks/singletons.b7161f2b.js","_app/immutable/chunks/index.ed7de26b.js","_app/immutable/chunks/state.db657d8b.js"];
export const stylesheets = ["_app/immutable/assets/global.b62f0bbb.css"];
export const fonts = [];
