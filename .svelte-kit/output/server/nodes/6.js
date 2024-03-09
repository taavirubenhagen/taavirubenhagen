import * as server from '../entries/pages/admin/access/_password_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/access/_password_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/access/[password]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.bdfd77ad.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/SmallHeading.5ce6d0fd.js","_app/immutable/chunks/paths.7ddff47d.js","_app/immutable/chunks/Page.6da6bb2d.js","_app/immutable/chunks/stores.bc25722a.js","_app/immutable/chunks/singletons.596d77b0.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/SmallParagraph.c78ab20e.js","_app/immutable/chunks/InlineButton.d033d934.js","_app/immutable/chunks/RawButton.4753c507.js","_app/immutable/chunks/Section.3388596d.js"];
export const stylesheets = ["_app/immutable/assets/global.f841f7e3.css"];
export const fonts = [];
