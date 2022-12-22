import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { I as Interactive } from "../../chunks/global.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"w-screen min-h-screen bg-background text-onBackground"}">
  <header class="${"fixed z-40 w-screen h-24 flex_row_center"}">${validate_component(Interactive, "Interactive").$$render($$result, { state: "hover" }, {}, {
    default: () => {
      return `<img src="${"full_logo.svg"}" alt="${"Logo"}" class="${"h-8"}">`;
    }
  })}</header>
  ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
