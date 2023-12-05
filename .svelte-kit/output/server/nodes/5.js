import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.abac3beb.js","_app/immutable/chunks/index.1392673c.js","_app/immutable/chunks/SmallHeading.a0e3fb22.js","_app/immutable/chunks/paths.8689b7a5.js","_app/immutable/chunks/Page.f9bf3fbc.js","_app/immutable/chunks/stores.43077cf7.js","_app/immutable/chunks/singletons.ca5ae032.js","_app/immutable/chunks/index.5385f864.js","_app/immutable/chunks/RawButton.a70034b9.js","_app/immutable/chunks/state.f5cc2a9e.js","_app/immutable/chunks/Section.7461f5b2.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
