import * as server from '../entries/pages/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.11ff1111.js","_app/immutable/chunks/index.1416bfa1.js"];
export const stylesheets = ["_app/immutable/assets/global.bf465f66.css"];
export const fonts = [];
