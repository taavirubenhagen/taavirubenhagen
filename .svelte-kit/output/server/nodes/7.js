import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.19d77a78.js","_app/immutable/chunks/index.f0a91b26.js"];
export const stylesheets = ["_app/immutable/assets/global.eab0df31.css"];
export const fonts = [];
