

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.36fb18c0.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/stores.6c9b6eda.js","_app/immutable/chunks/singletons.64124e76.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/paths.16cdd4b2.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/SmallHeading.6a07c942.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
