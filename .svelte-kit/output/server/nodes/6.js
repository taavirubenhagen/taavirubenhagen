import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.7f5fbef4.js","_app/immutable/chunks/index.78ed22c3.js","_app/immutable/chunks/SmallHeading.9eb26839.js","_app/immutable/chunks/paths.36523c55.js","_app/immutable/chunks/Page.fb53b34c.js","_app/immutable/chunks/stores.769697b9.js","_app/immutable/chunks/singletons.d2479efa.js","_app/immutable/chunks/index.e0e5ec0c.js","_app/immutable/chunks/SmallParagraph.5b251ad5.js","_app/immutable/chunks/RawButton.30ccdb18.js","_app/immutable/chunks/Section.dc9f226b.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
