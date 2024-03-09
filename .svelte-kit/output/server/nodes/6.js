import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.e7783f5e.js","_app/immutable/chunks/index.c47c8e85.js","_app/immutable/chunks/SmallHeading.3e7f4412.js","_app/immutable/chunks/paths.a4701768.js","_app/immutable/chunks/Page.ee5745f3.js","_app/immutable/chunks/stores.d9a943b2.js","_app/immutable/chunks/singletons.a9286bff.js","_app/immutable/chunks/index.0c55ded3.js","_app/immutable/chunks/SmallParagraph.9db653fb.js","_app/immutable/chunks/InlineButton.6f301af5.js","_app/immutable/chunks/RawButton.a29778c1.js","_app/immutable/chunks/Section.f3ad33d4.js"];
export const stylesheets = ["_app/immutable/assets/global.9938cb0d.css"];
export const fonts = [];
