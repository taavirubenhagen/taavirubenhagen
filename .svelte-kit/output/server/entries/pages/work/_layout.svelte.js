import { c as create_ssr_component } from "../../../chunks/index.js";
import "ua-parser-js";
/* empty css                                                    *//* empty css                      */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};