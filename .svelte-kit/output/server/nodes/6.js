import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.c93bfbcb.js","_app/immutable/chunks/index.6f53fbaf.js","_app/immutable/chunks/SmallHeading.1030fa6b.js","_app/immutable/chunks/paths.bc425584.js","_app/immutable/chunks/Page.bddb29e6.js","_app/immutable/chunks/stores.4d1d2283.js","_app/immutable/chunks/singletons.6b14182c.js","_app/immutable/chunks/index.76df1b87.js","_app/immutable/chunks/SmallParagraph.1dc8addc.js","_app/immutable/chunks/RawButton.55a8e7fc.js","_app/immutable/chunks/state.37fff307.js","_app/immutable/chunks/Section.1284b91b.js"];
export const stylesheets = ["_app/immutable/assets/global.7e946c0c.css"];
export const fonts = [];
