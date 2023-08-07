import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.dc413b66.js","_app/immutable/chunks/index.04f8c59f.js"];
export const stylesheets = ["_app/immutable/assets/global.0a91b0b1.css"];
export const fonts = [];
