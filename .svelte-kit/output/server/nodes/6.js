import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.25241a6f.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/SmallHeading.b0e9823b.js","_app/immutable/chunks/paths.257b0bc6.js","_app/immutable/chunks/Page.9a6a830b.js","_app/immutable/chunks/stores.10392a92.js","_app/immutable/chunks/singletons.cf6c57dd.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/SmallParagraph.80da61ea.js","_app/immutable/chunks/InlineButton.fd24095f.js","_app/immutable/chunks/RawButton.7cc977f6.js","_app/immutable/chunks/Section.491f0076.js"];
export const stylesheets = ["_app/immutable/assets/global.0412281e.css"];
export const fonts = [];
