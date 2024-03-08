import { c as create_ssr_component, e as escape } from "../../../../chunks/index3.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
/* empty css                         */import "ua-parser-js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollDependentClass = "";
  globalScrollY.subscribe((value) => scrollDependentClass = value === 0 ? "" : "bg-background");
  return `




<main><div class="${"fixed z-40 top-0 w-full h-16 " + escape(scrollDependentClass, true) + " border-b border-primary"}"></div>
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
