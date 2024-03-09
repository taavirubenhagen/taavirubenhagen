import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.a1aba852.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/SmallHeading.38948110.js","_app/immutable/chunks/paths.ce8f1be2.js","_app/immutable/chunks/Page.023118cf.js","_app/immutable/chunks/stores.127414bb.js","_app/immutable/chunks/singletons.cde8de60.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/SmallParagraph.ae1f4329.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/Section.c04fc9dd.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
