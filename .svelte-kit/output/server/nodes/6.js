import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.d2f9607c.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/SmallHeading.f46cf340.js","_app/immutable/chunks/paths.426c780e.js","_app/immutable/chunks/Page.530faad7.js","_app/immutable/chunks/stores.b9a305b9.js","_app/immutable/chunks/singletons.e862e256.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/SmallParagraph.a361a6a7.js","_app/immutable/chunks/RawButton.af5d6688.js","_app/immutable/chunks/Section.725124c0.js"];
export const stylesheets = ["_app/immutable/assets/global.a693be3f.css"];
export const fonts = [];
