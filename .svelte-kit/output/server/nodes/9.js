import * as server from '../entries/pages/_page.server.ts.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.d8d899b0.js","_app/immutable/chunks/index.32e03256.js"];
export const stylesheets = ["_app/immutable/assets/global.06330c47.css"];
export const fonts = [];
