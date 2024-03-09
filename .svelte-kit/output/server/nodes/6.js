import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.2c81e3ce.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/SmallHeading.c5202222.js","_app/immutable/chunks/paths.43650e47.js","_app/immutable/chunks/Page.578fc4d3.js","_app/immutable/chunks/stores.e18bdee5.js","_app/immutable/chunks/singletons.6d219e18.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/SmallParagraph.6298223c.js","_app/immutable/chunks/InlineButton.b9cd7dff.js","_app/immutable/chunks/RawButton.1c9663e4.js","_app/immutable/chunks/Section.24a3ca0d.js"];
export const stylesheets = ["_app/immutable/assets/global.a8b2176a.css"];
export const fonts = [];
