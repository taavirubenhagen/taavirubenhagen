

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8f3b1d97.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/stores.f8cbdbb3.js","_app/immutable/chunks/singletons.a6ce8253.js","_app/immutable/chunks/index.39ab129f.js","_app/immutable/chunks/paths.b816f7e6.js","_app/immutable/chunks/RawButton.f3de4b67.js","_app/immutable/chunks/ua-parser.506ab6e0.js","_app/immutable/chunks/LargeHeading.b66fff84.js","_app/immutable/chunks/Section.3146adab.js","_app/immutable/chunks/DeviceDetector.57d230f9.js","_app/immutable/chunks/Button.8e3b84de.js","_app/immutable/chunks/MediumParagraph.3e7722ae.js","_app/immutable/chunks/icon.e9b531da.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.9a550ba1.css"];
export const fonts = [];
