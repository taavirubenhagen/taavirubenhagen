import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.51d63849.js","_app/immutable/chunks/index.f795e419.js","_app/immutable/chunks/SmallHeading.4853463a.js","_app/immutable/chunks/paths.330c9fa6.js","_app/immutable/chunks/Page.ac8048a5.js","_app/immutable/chunks/stores.a726693e.js","_app/immutable/chunks/singletons.3405f7b6.js","_app/immutable/chunks/index.c4183f15.js","_app/immutable/chunks/SmallParagraph.e9d24a77.js","_app/immutable/chunks/RawButton.d7bff77b.js","_app/immutable/chunks/Section.ff569156.js"];
export const stylesheets = ["_app/immutable/assets/global.eda23f50.css"];
export const fonts = [];
