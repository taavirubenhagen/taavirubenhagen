import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.ba9cfa21.js","_app/immutable/chunks/index.1f336de1.js","_app/immutable/chunks/SmallHeading.c8b1ad04.js","_app/immutable/chunks/paths.c80d90b9.js","_app/immutable/chunks/Page.8e520d2b.js","_app/immutable/chunks/stores.e999fdd2.js","_app/immutable/chunks/singletons.cf5b047e.js","_app/immutable/chunks/index.703c138a.js","_app/immutable/chunks/SmallParagraph.6009eb10.js","_app/immutable/chunks/RawButton.293de0f1.js","_app/immutable/chunks/state.2a2fd8b4.js","_app/immutable/chunks/Section.62b88ac5.js"];
export const stylesheets = ["_app/immutable/assets/global.c0e8d9fc.css"];
export const fonts = [];
