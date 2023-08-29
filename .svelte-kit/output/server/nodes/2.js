import * as server from '../entries/pages/home/_layout.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.a5bca085.js","_app/immutable/chunks/index.3a8a4865.js"];
export const stylesheets = [];
export const fonts = [];
