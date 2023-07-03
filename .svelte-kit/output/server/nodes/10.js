import * as server from '../entries/pages/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.8e7f3797.js","_app/immutable/chunks/index.9697a0f2.js"];
export const stylesheets = ["_app/immutable/assets/global.6aae7475.css"];
export const fonts = [];
