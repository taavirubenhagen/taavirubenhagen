import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.1cb36931.js","_app/immutable/chunks/index.02ab7da4.js"];
export const stylesheets = ["_app/immutable/assets/global.26cd7be4.css"];
export const fonts = [];
