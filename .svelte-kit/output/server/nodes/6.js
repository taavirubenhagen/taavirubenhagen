import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.fdb42bec.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.da195932.js","_app/immutable/chunks/SmallHeading.5a339de5.js","_app/immutable/chunks/Section.2b77a79b.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
