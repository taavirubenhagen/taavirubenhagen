import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.365d447c.js","_app/immutable/chunks/index.627121b3.js"];
export const stylesheets = ["_app/immutable/assets/global.2fb39d5c.css"];
export const fonts = [];
