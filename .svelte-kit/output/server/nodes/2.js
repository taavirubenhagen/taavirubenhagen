

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.edb130bf.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/paths.81eaa36e.js","_app/immutable/chunks/Button.f0ff9f6a.js","_app/immutable/chunks/RawButton.5d5b2660.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/ButtonSeperator.a10daee0.js","_app/immutable/chunks/Page.fb43baa6.js","_app/immutable/chunks/stores.77833b06.js","_app/immutable/chunks/singletons.8d0ad5a6.js","_app/immutable/chunks/Section.bcbd88fc.js"];
export const stylesheets = ["_app/immutable/assets/global.f7e9ce18.css"];
export const fonts = [];
