import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.f4eb7a8d.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/SmallHeading.2ea32a15.js","_app/immutable/chunks/paths.c0e169d4.js","_app/immutable/chunks/InlineButton.0f54ddc6.js","_app/immutable/chunks/stores.ac2de538.js","_app/immutable/chunks/singletons.e510968c.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/Section.3257bf26.js","_app/immutable/chunks/RawButton.fa2300e0.js","_app/immutable/chunks/state.4242929e.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
