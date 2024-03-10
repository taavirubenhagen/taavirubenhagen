

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f10e82ea.js","_app/immutable/chunks/index.84ea942b.js","_app/immutable/chunks/ua-parser.68212d1b.js","_app/immutable/chunks/Section.45fee6df.js","_app/immutable/chunks/Button.4eaf72de.js","_app/immutable/chunks/MediumParagraph.66104f2b.js","_app/immutable/chunks/icon.cdf8edeb.js","_app/immutable/chunks/RawButton.6bac36eb.js","_app/immutable/chunks/index.39ab129f.js","_app/immutable/chunks/ButtonSeperator.a0420e78.js"];
export const stylesheets = ["_app/immutable/assets/ua-parser.002b7c04.css"];
export const fonts = [];
