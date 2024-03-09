import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.b9f4f5de.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/SmallHeading.1677f120.js","_app/immutable/chunks/paths.2b1901fa.js","_app/immutable/chunks/Page.54788b6c.js","_app/immutable/chunks/stores.24a2ae5b.js","_app/immutable/chunks/singletons.b59219f9.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/SmallParagraph.338a3e7d.js","_app/immutable/chunks/InlineButton.eb196b4d.js","_app/immutable/chunks/RawButton.ed944c78.js","_app/immutable/chunks/Section.6b5ca244.js"];
export const stylesheets = ["_app/immutable/assets/global.71916f15.css"];
export const fonts = [];
