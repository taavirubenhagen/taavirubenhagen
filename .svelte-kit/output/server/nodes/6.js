import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.ad5adbd0.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.ce0f440b.js","_app/immutable/chunks/SmallHeading.0e75d848.js","_app/immutable/chunks/Section.5ed59174.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.21fc8f9b.css"];
export const fonts = [];
