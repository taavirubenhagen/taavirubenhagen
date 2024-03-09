

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.17ce88e1.js","_app/immutable/chunks/index.a46aface.js","_app/immutable/chunks/paths.518f4512.js","_app/immutable/chunks/Button.3446f857.js","_app/immutable/chunks/RawButton.54180ef4.js","_app/immutable/chunks/index.26562532.js","_app/immutable/chunks/ButtonSeperator.a1f995c1.js","_app/immutable/chunks/Page.c140f956.js","_app/immutable/chunks/stores.a65182f2.js","_app/immutable/chunks/singletons.75631ad8.js","_app/immutable/chunks/SmallParagraph.51089f93.js","_app/immutable/chunks/InlineButton.4c705b4b.js","_app/immutable/chunks/Section.18bf94fa.js"];
export const stylesheets = ["_app/immutable/assets/global.8ffcc461.css"];
export const fonts = [];
