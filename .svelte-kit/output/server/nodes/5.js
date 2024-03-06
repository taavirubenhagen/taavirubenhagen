import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.26c22bdb.js","_app/immutable/chunks/index.38f42238.js","_app/immutable/chunks/SmallHeading.3f87f10e.js","_app/immutable/chunks/paths.f8197c24.js","_app/immutable/chunks/Page.d3d2eeb8.js","_app/immutable/chunks/stores.38def942.js","_app/immutable/chunks/singletons.a11da8c9.js","_app/immutable/chunks/index.dac91cf7.js","_app/immutable/chunks/SmallParagraph.23a7d780.js","_app/immutable/chunks/RawButton.84b2230e.js","_app/immutable/chunks/state.9f8584fa.js","_app/immutable/chunks/Section.b6305638.js"];
export const stylesheets = ["_app/immutable/assets/global.82877781.css"];
export const fonts = [];
