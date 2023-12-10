import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.6998708f.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/SmallHeading.2ea32a15.js","_app/immutable/chunks/paths.7d77a03b.js","_app/immutable/chunks/InlineButton.6a7310cf.js","_app/immutable/chunks/stores.4cae2d74.js","_app/immutable/chunks/singletons.3f8c5c88.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/Section.7a78c67d.js","_app/immutable/chunks/RawButton.fa2300e0.js","_app/immutable/chunks/state.4242929e.js"];
export const stylesheets = ["_app/immutable/assets/global.ec1252bb.css"];
export const fonts = [];
