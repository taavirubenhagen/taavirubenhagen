

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/drafts/website/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.34206bf8.js","_app/immutable/chunks/index.6f53fbaf.js","_app/immutable/chunks/paths.bc425584.js","_app/immutable/chunks/state.37fff307.js","_app/immutable/chunks/index.76df1b87.js","_app/immutable/chunks/ua-parser.a9f38bd6.js"];
export const stylesheets = ["_app/immutable/assets/global.7e946c0c.css"];
export const fonts = [];
