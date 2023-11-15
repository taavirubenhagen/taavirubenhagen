import * as server from '../entries/pages/home/_layout.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/home/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.cfa6e148.js","_app/immutable/chunks/index.b4d8f349.js"];
export const stylesheets = [];
export const fonts = [];
