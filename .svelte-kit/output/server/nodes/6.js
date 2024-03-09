import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.7a31d1b6.js","_app/immutable/chunks/index.a46aface.js","_app/immutable/chunks/SmallHeading.596804b7.js","_app/immutable/chunks/paths.7a5027d6.js","_app/immutable/chunks/Page.3aa8ee31.js","_app/immutable/chunks/stores.b96bbfd6.js","_app/immutable/chunks/singletons.104ca398.js","_app/immutable/chunks/index.26562532.js","_app/immutable/chunks/SmallParagraph.831e9af8.js","_app/immutable/chunks/InlineButton.2ed4c195.js","_app/immutable/chunks/RawButton.88861599.js","_app/immutable/chunks/Section.c45f2ef5.js"];
export const stylesheets = ["_app/immutable/assets/global.71916f15.css"];
export const fonts = [];
