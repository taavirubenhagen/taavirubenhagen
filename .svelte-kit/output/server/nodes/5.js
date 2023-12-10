import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.80800845.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/SmallHeading.2ea32a15.js","_app/immutable/chunks/paths.12c4c171.js","_app/immutable/chunks/InlineButton.cbbea19d.js","_app/immutable/chunks/stores.4066c3e8.js","_app/immutable/chunks/singletons.a00e1a77.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/Section.3257bf26.js","_app/immutable/chunks/RawButton.fa2300e0.js","_app/immutable/chunks/state.4242929e.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
