

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/30.f6d73fd6.js","_app/immutable/chunks/index.c47c8e85.js","_app/immutable/chunks/RawButton.a29778c1.js","_app/immutable/chunks/index.0c55ded3.js","_app/immutable/chunks/paths.f92fdfb5.js","_app/immutable/chunks/Button.01db1d9d.js","_app/immutable/chunks/ButtonSeperator.d608eda0.js","_app/immutable/chunks/Page.6f75d55c.js","_app/immutable/chunks/stores.538c75b6.js","_app/immutable/chunks/singletons.8c28ebb5.js","_app/immutable/chunks/SmallParagraph.9db653fb.js","_app/immutable/chunks/InlineButton.fb6255bd.js","_app/immutable/chunks/Section.f3ad33d4.js"];
export const stylesheets = ["_app/immutable/assets/global.9938cb0d.css"];
export const fonts = [];