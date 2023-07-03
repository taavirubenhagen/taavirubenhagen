import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.a5cf0bf4.js","_app/immutable/chunks/index.d996ad75.js"];
export const stylesheets = ["_app/immutable/assets/global.14a50e33.css"];
export const fonts = [];
