import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.5e48b1f5.js","_app/immutable/chunks/index.46dbe2c3.js"];
export const stylesheets = ["_app/immutable/assets/global.08f4d4db.css"];
export const fonts = [];
