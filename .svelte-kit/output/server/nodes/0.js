import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.5726c203.js","_app/immutable/chunks/index.b4d8f349.js"];
export const stylesheets = ["_app/immutable/assets/global.9f083f1f.css"];
export const fonts = [];
