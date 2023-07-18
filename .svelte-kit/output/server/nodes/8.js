import * as server from '../entries/pages/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.71c51e68.js","_app/immutable/chunks/index.fe9af9ec.js"];
export const stylesheets = ["_app/immutable/assets/global.9b0df2a9.css"];
export const fonts = [];
