import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.d9215fa1.js","_app/immutable/chunks/index.a46aface.js","_app/immutable/chunks/SmallHeading.7c8c99cf.js","_app/immutable/chunks/paths.518f4512.js","_app/immutable/chunks/Page.c140f956.js","_app/immutable/chunks/stores.a65182f2.js","_app/immutable/chunks/singletons.75631ad8.js","_app/immutable/chunks/index.26562532.js","_app/immutable/chunks/SmallParagraph.51089f93.js","_app/immutable/chunks/InlineButton.4c705b4b.js","_app/immutable/chunks/RawButton.54180ef4.js","_app/immutable/chunks/Section.18bf94fa.js"];
export const stylesheets = ["_app/immutable/assets/global.8ffcc461.css"];
export const fonts = [];
