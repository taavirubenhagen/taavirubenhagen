import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.c4b43fbb.js","_app/immutable/chunks/index.8c467964.js","_app/immutable/chunks/SmallHeading.ae51c673.js","_app/immutable/chunks/paths.4d6abfef.js","_app/immutable/chunks/Page.19f28476.js","_app/immutable/chunks/stores.cb815765.js","_app/immutable/chunks/singletons.054017e9.js","_app/immutable/chunks/index.f16e3478.js","_app/immutable/chunks/RawButton.5a234857.js","_app/immutable/chunks/state.204f6a1d.js","_app/immutable/chunks/Section.7974162d.js"];
export const stylesheets = ["_app/immutable/assets/global.94baccd2.css"];
export const fonts = [];
