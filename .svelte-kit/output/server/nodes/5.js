import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.600c7c4d.js","_app/immutable/chunks/index.e9c5c64a.js","_app/immutable/chunks/SmallHeading.8e4c394a.js","_app/immutable/chunks/paths.a2004289.js","_app/immutable/chunks/Page.fd28e227.js","_app/immutable/chunks/stores.74dcae02.js","_app/immutable/chunks/singletons.63824bed.js","_app/immutable/chunks/index.a8b9ede1.js","_app/immutable/chunks/InlineButton.c494f4ac.js","_app/immutable/chunks/RawButton.3e4e89f9.js","_app/immutable/chunks/state.03dfb7d4.js","_app/immutable/chunks/Section.75b1d9c9.js"];
export const stylesheets = ["_app/immutable/assets/global.865ec020.css"];
export const fonts = [];
