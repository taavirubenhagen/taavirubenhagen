

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0b81036a.js","_app/immutable/chunks/index.7b7993cb.js","_app/immutable/chunks/stores.5c1b70bb.js","_app/immutable/chunks/singletons.e3c847b9.js","_app/immutable/chunks/index.228e60ed.js","_app/immutable/chunks/paths.57fc7ed3.js","_app/immutable/chunks/RawButton.2786cb91.js","_app/immutable/chunks/LargeHeading.01e10e02.js","_app/immutable/chunks/Button.6d811a6f.js","_app/immutable/chunks/Page.54fb9c87.js","_app/immutable/chunks/SmallParagraph.ae1f4329.js","_app/immutable/chunks/Section.c04fc9dd.js","_app/immutable/chunks/DeviceDetector.c4aa0fa6.js"];
export const stylesheets = ["_app/immutable/assets/global.44f97d18.css"];
export const fonts = [];
