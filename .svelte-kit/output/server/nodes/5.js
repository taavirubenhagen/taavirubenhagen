import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.5d5bd603.js","_app/immutable/chunks/index.9e5a1b15.js","_app/immutable/chunks/SmallHeading.1927363b.js","_app/immutable/chunks/paths.7780e19c.js","_app/immutable/chunks/Page.87bafd4a.js","_app/immutable/chunks/stores.61b090db.js","_app/immutable/chunks/singletons.2426495b.js","_app/immutable/chunks/index.95425f24.js","_app/immutable/chunks/SmallParagraph.7aec6b39.js","_app/immutable/chunks/RawButton.9ca990fc.js","_app/immutable/chunks/state.c5884cbc.js","_app/immutable/chunks/Section.f22c2715.js"];
export const stylesheets = ["_app/immutable/assets/global.159ef71b.css"];
export const fonts = [];
