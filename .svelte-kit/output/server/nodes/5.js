import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.ea8c46f3.js","_app/immutable/chunks/index.6efdc3e5.js","_app/immutable/chunks/SmallHeading.ad2fb01c.js","_app/immutable/chunks/paths.6d510c1a.js","_app/immutable/chunks/TertiaryButton.78003647.js","_app/immutable/chunks/stores.fe1d990c.js","_app/immutable/chunks/singletons.c5d1cc9b.js","_app/immutable/chunks/index.d0b46775.js","_app/immutable/chunks/RawButton.bd06f1b3.js","_app/immutable/chunks/state.fdea7c65.js","_app/immutable/chunks/Section.d8e73d02.js"];
export const stylesheets = ["_app/immutable/assets/global.be26f52d.css"];
export const fonts = [];
