import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.a0abf2c9.js","_app/immutable/chunks/index.f57fbee0.js","_app/immutable/chunks/SmallHeading.522bb64a.js","_app/immutable/chunks/paths.c9d48398.js","_app/immutable/chunks/Page.9c51223a.js","_app/immutable/chunks/stores.e810de04.js","_app/immutable/chunks/singletons.ea9ebe89.js","_app/immutable/chunks/index.a76aac04.js","_app/immutable/chunks/SmallParagraph.f730a046.js","_app/immutable/chunks/RawButton.70d03cf9.js","_app/immutable/chunks/Section.47250a10.js"];
export const stylesheets = ["_app/immutable/assets/global.eed57195.css"];
export const fonts = [];
