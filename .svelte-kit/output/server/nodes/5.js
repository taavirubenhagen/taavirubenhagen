import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.9c55d26a.js","_app/immutable/chunks/index.35b8ce9f.js","_app/immutable/chunks/SmallHeading.2480ce94.js","_app/immutable/chunks/paths.6e681172.js","_app/immutable/chunks/Page.68d02d14.js","_app/immutable/chunks/stores.0d80eeb9.js","_app/immutable/chunks/singletons.7a762a25.js","_app/immutable/chunks/index.b94acf3e.js","_app/immutable/chunks/RawButton.8f3732a0.js","_app/immutable/chunks/state.dba43285.js","_app/immutable/chunks/Section.b31ef7ba.js"];
export const stylesheets = ["_app/immutable/assets/global.90099ecd.css"];
export const fonts = [];
