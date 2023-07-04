import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.6089ff5d.js","_app/immutable/chunks/index.744a5863.js"];
export const stylesheets = ["_app/immutable/assets/global.e2c3ce3d.css"];
export const fonts = [];
