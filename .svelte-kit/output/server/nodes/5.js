import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.7f074f60.js","_app/immutable/chunks/index.3ab1d97b.js","_app/immutable/chunks/SmallHeading.05d35b93.js","_app/immutable/chunks/paths.788d9fc1.js","_app/immutable/chunks/InlineButton.e55edebd.js","_app/immutable/chunks/stores.bf7bdd02.js","_app/immutable/chunks/singletons.e4526558.js","_app/immutable/chunks/index.2f0bf968.js","_app/immutable/chunks/Section.5b838618.js","_app/immutable/chunks/RawButton.c73a6f20.js","_app/immutable/chunks/state.4242929e.js"];
export const stylesheets = ["_app/immutable/assets/global.5d288260.css"];
export const fonts = [];
