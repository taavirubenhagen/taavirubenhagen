

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3a164fcd.js","_app/immutable/chunks/index.148ea34d.js","_app/immutable/chunks/paths.8874fe37.js","_app/immutable/chunks/Button.5595b315.js","_app/immutable/chunks/RawButton.b039a67f.js","_app/immutable/chunks/state.71e4fc84.js","_app/immutable/chunks/index.241df983.js","_app/immutable/chunks/ButtonSeperator.135db13f.js","_app/immutable/chunks/Page.46d0433e.js","_app/immutable/chunks/stores.8941f1cc.js","_app/immutable/chunks/singletons.9b5d6132.js","_app/immutable/chunks/Section.b6f301d6.js"];
export const stylesheets = ["_app/immutable/assets/global.fc18b606.css"];
export const fonts = [];
