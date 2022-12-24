import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import "ua-parser-js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"w-screen min-h-screen bg-background text-onBackground"}">
  <header class="${"fixed z-20 w-full h-0 flex flex-col md:flex-row justify-start md:justify-center items-center"}"></header>
  <div class="${escape("blur-0", true) + " h-screen"}" style="${"transition: all 400ms cubic-bezier(0, .2, 1, .4);"}">${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
