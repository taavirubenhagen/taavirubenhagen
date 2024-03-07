import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.05b5ae93.js","_app/immutable/chunks/index.1f336de1.js","_app/immutable/chunks/SmallHeading.c8b1ad04.js","_app/immutable/chunks/paths.2793088c.js","_app/immutable/chunks/Page.c3e25208.js","_app/immutable/chunks/stores.09c59413.js","_app/immutable/chunks/singletons.121122e5.js","_app/immutable/chunks/index.703c138a.js","_app/immutable/chunks/SmallParagraph.6009eb10.js","_app/immutable/chunks/RawButton.293de0f1.js","_app/immutable/chunks/state.2a2fd8b4.js","_app/immutable/chunks/Section.62b88ac5.js"];
export const stylesheets = ["_app/immutable/assets/global.c0e8d9fc.css"];
export const fonts = [];
