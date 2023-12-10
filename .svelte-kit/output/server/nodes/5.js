import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.fc78ea29.js","_app/immutable/chunks/index.140d9f15.js","_app/immutable/chunks/SmallHeading.d0fb69b7.js","_app/immutable/chunks/paths.8a658f01.js","_app/immutable/chunks/InlineButton.fd0facd2.js","_app/immutable/chunks/stores.9197629a.js","_app/immutable/chunks/singletons.9f4b8a01.js","_app/immutable/chunks/index.ba2cbadf.js","_app/immutable/chunks/Section.fc537183.js","_app/immutable/chunks/RawButton.cdc9826a.js","_app/immutable/chunks/state.aa844a84.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
