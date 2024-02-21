import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.d5683ead.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/SmallHeading.4ae812f0.js","_app/immutable/chunks/paths.4c29315e.js","_app/immutable/chunks/Page.a84ad81d.js","_app/immutable/chunks/stores.418c8d48.js","_app/immutable/chunks/singletons.2f3e9013.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/RawButton.5d5b2660.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/Section.bcbd88fc.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
