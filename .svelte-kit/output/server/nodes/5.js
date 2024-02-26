import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.1c8295fc.js","_app/immutable/chunks/index.4ce69c25.js","_app/immutable/chunks/SmallHeading.3b4780a6.js","_app/immutable/chunks/paths.3b442bde.js","_app/immutable/chunks/Page.e7bff2bd.js","_app/immutable/chunks/stores.f8b4d502.js","_app/immutable/chunks/singletons.1f0ebeba.js","_app/immutable/chunks/index.fb74aaef.js","_app/immutable/chunks/RawButton.76fb7ddc.js","_app/immutable/chunks/state.6b87bbcc.js","_app/immutable/chunks/Section.8889d846.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
