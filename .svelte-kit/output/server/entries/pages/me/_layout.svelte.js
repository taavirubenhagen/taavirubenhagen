import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
import "ua-parser-js";
/* empty css                      */import { I as Icon } from "../../../chunks/icon.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `




<main class="${"w-screen min-h-screen bg-background text-onBackground"}">
  
  <div class="${"fixed z-50 w-screen h-8 bg-primary flex_row_center primary"}"><h5>This page is still under development.</h5></div>
  <div class="${"fixed z-40 right-28 bottom-8 shadow-xl rounded-full bg-background"}"><h5 class="${escape("opacity-100", true) + " rounded-full border border-primary w-32 h-16 pb-1 flex_row_center default_animation_long"}">Scroll</h5>
    <div class="${escape("opacity-0", true) + " absolute left-0 top-0 rounded-full w-32 h-16 flex default_animation_long"}"><button class="${"rounded-l-full border border-r-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-5 pr-3 bg-onPrimary flex_row_center default_animation_base"}">${validate_component(Icon, "Icon").$$render($$result, { name: "icons_1_down_8" }, {}, {})}</button>
      <button class="${"rounded-r-full border border-l-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-3 pr-5 bg-onPrimary flex_row_center default_animation_base"}">${validate_component(Icon, "Icon").$$render($$result, { name: "icons_1_up_8" }, {}, {})}</button></div></div>
  
  <button class="${"fixed z-40 right-6 bottom-8 shadow-xl rounded-full border w-16 h-16 bg-primary"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "outfyx_menu",
      isWhite: true,
      iconClass: "p-4"
    },
    {},
    {}
  )}</button>
  <div class="${escape("blur-0", true) + " max-h-screen"}" style="${"transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"}">${slots.default ? slots.default({}) : `
      <s1>This page is still under development.</s1>
    `}</div></main>`;
});
export {
  Layout as default
};
