import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.0d1dd9cf.js","_app/immutable/chunks/index.7cc8941a.js"];
export const stylesheets = ["_app/immutable/assets/global.f0448a21.css"];
export const fonts = [];
