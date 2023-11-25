import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.b8d7a177.js","_app/immutable/chunks/index.22bfdd9c.js"];
export const stylesheets = ["_app/immutable/assets/global.08c8932e.css"];
export const fonts = [];
