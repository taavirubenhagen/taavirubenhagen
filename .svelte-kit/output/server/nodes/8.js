import * as server from '../entries/pages/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.e058b16c.js","_app/immutable/chunks/index.a67d2f2b.js"];
export const stylesheets = ["_app/immutable/assets/global.bfe041ad.css"];
export const fonts = [];
