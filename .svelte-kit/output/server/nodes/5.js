import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.31e6481d.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/SmallHeading.dc422278.js","_app/immutable/chunks/paths.8874fe37.js","_app/immutable/chunks/Page.46d0433e.js","_app/immutable/chunks/stores.8941f1cc.js","_app/immutable/chunks/singletons.9b5d6132.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/RawButton.b039a67f.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/Section.b6f301d6.js"];
export const stylesheets = ["_app/immutable/assets/global.fc18b606.css"];
export const fonts = [];
