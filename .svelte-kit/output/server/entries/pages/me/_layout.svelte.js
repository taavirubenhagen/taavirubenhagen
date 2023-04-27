import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import "ua-parser-js";
/* empty css                      */import { S as Secondary_button_label } from "../../../chunks/secondary_button_label.js";
const Tertiary_button_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"text-lg md:text-lg font-bold"}">${slots.default ? slots.default({}) : ``}</p>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `




<main class="${"max-w-screen min-h-screen background"}">
  
  <div class="${"fixed z-50 w-screen h-8 primary flex_row_center"}">${validate_component(Secondary_button_label, "SecondaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `Still under development`;
    }
  })}</div>
  <div class="${"fixed z-30 bottom-8 w-screen flex_row_center"}">
    <button class="${"transition-all duration-200 opacity-100 hover:opacity-75 shadow-md rounded-lg bg-background px-4 py-2"}">${validate_component(Tertiary_button_label, "TertiaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `Back to top`;
    }
  })}</button></div>
  
  ${``}
  <div class="${escape("blur-0", true) + " max-h-screen"}" style="${"transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"}">${slots.default ? slots.default({}) : `
      <s1>This page is still under development.</s1>
    `}</div></main>`;
});
export {
  Layout as default
};
