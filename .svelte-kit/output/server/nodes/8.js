import * as server from '../entries/pages/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.51ebe9bf.js","_app/immutable/chunks/index.46dbe2c3.js"];
export const stylesheets = ["_app/immutable/assets/global.d77c2931.css"];
export const fonts = [];
