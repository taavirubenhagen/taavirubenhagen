import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.a0ef1e8d.js","_app/immutable/chunks/index.ca0f68f9.js","_app/immutable/chunks/Section.c179b575.js"];
export const stylesheets = ["_app/immutable/assets/global.fb7b4b88.css"];
export const fonts = [];
