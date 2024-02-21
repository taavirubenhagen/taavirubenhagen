import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.15d8e748.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/SmallHeading.9dee3767.js","_app/immutable/chunks/paths.19d6a35a.js","_app/immutable/chunks/Page.4ab737b9.js","_app/immutable/chunks/stores.e266105f.js","_app/immutable/chunks/singletons.645c46cc.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/RawButton.b0bfb5d1.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/Section.956c5fd7.js"];
export const stylesheets = ["_app/immutable/assets/global.b3084c45.css"];
export const fonts = [];
