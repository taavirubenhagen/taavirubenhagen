import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.046df373.js","_app/immutable/chunks/index.dffb363a.js"];
export const stylesheets = ["_app/immutable/assets/global.bc6e84fb.css"];
export const fonts = [];
