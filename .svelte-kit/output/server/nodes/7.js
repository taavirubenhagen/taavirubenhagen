import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.35e71272.js","_app/immutable/chunks/index.8c3b8597.js"];
export const stylesheets = ["_app/immutable/assets/global.f6e8543f.css"];
export const fonts = [];
