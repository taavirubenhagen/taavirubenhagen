import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.4ff9b7cf.js","_app/immutable/chunks/index.78ed22c3.js","_app/immutable/chunks/SmallHeading.9eb26839.js","_app/immutable/chunks/paths.f5ce1129.js","_app/immutable/chunks/Page.fc418f74.js","_app/immutable/chunks/stores.31252154.js","_app/immutable/chunks/singletons.eadc6aaf.js","_app/immutable/chunks/index.e0e5ec0c.js","_app/immutable/chunks/SmallParagraph.5b251ad5.js","_app/immutable/chunks/RawButton.30ccdb18.js","_app/immutable/chunks/Section.dc9f226b.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
