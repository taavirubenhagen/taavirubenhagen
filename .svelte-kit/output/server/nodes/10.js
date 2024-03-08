

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/deprecated/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.e66047ba.js","_app/immutable/chunks/index.6f53fbaf.js","_app/immutable/chunks/DeviceDetector.b713fea9.js","_app/immutable/chunks/ua-parser.a9f38bd6.js","_app/immutable/chunks/Button.87b5f489.js","_app/immutable/chunks/RawButton.55a8e7fc.js","_app/immutable/chunks/state.37fff307.js","_app/immutable/chunks/index.76df1b87.js","_app/immutable/chunks/paths.bc425584.js","_app/immutable/chunks/SmallHeading.1030fa6b.js","_app/immutable/chunks/MediumHeading.8e1b747a.js","_app/immutable/chunks/LargeHeading.30cf0aec.js","_app/immutable/chunks/Button.c042ed69.js"];
export const stylesheets = ["_app/immutable/assets/global.7e946c0c.css"];
export const fonts = [];
