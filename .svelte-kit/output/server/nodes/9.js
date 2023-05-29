import * as server from '../entries/pages/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.ef94142a.js","_app/immutable/chunks/index.5d2620f2.js"];
export const stylesheets = ["_app/immutable/assets/global.981e1fa8.css"];
export const fonts = [];
