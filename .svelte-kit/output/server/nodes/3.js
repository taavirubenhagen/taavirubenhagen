

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b7f371c9.js","_app/immutable/chunks/index.128d686f.js","_app/immutable/chunks/paths.7ddff47d.js","_app/immutable/chunks/Button.59a8c1a3.js","_app/immutable/chunks/RawButton.4753c507.js","_app/immutable/chunks/index.1f1b17f2.js","_app/immutable/chunks/ButtonSeperator.517a8728.js","_app/immutable/chunks/Page.6da6bb2d.js","_app/immutable/chunks/stores.bc25722a.js","_app/immutable/chunks/singletons.596d77b0.js","_app/immutable/chunks/SmallParagraph.c78ab20e.js","_app/immutable/chunks/InlineButton.d033d934.js","_app/immutable/chunks/Section.3388596d.js"];
export const stylesheets = ["_app/immutable/assets/global.f841f7e3.css"];
export const fonts = [];
