import * as server from '../entries/pages/_page.server.ts.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.4b4fc8b5.js","_app/immutable/chunks/index.fc22d793.js"];
export const stylesheets = ["_app/immutable/assets/global.14c97b6b.css"];
export const fonts = [];
