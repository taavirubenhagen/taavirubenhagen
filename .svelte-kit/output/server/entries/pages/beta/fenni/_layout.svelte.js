import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as add_attribute } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { D as DeviceDetector } from "../../../../chunks/DeviceDetector.js";
import { I as Icon } from "../../../../chunks/icon.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let menuButtonCanvas;
  $$unsubscribe_page();
  return `




<main class="${"w-screen min-h-screen background"}">
  
  <div class="${"fixed z-50 w-screen h-8 flex_row_center"}"><h5>This page is still under development.</h5></div>
  <button class="${"fixed z-40 right-28 bottom-8 shadow-xl rounded-full bg-background"}"><h5 class="${escape("opacity-100", true) + " rounded-full border-2 border-primary w-32 h-16 pb-1 flex_row_center duration-800"}">Scroll
    </h5>
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { deviceType: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape("opacity-0", true) + " absolute left-0 top-0 rounded-full w-32 h-16 flex duration-800"}"><button class="${"rounded-l-full border-2 border-r-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-5 pr-3 bg-onPrimary flex_row_center duration-200"}">${validate_component(Icon, "Icon").$$render($$result, { version: "0.1", name: "icons_1_down_8" }, {}, {})}</button>
        <button class="${"rounded-r-full border-2 border-l-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-3 pr-5 bg-onPrimary flex_row_center duration-200"}">${validate_component(Icon, "Icon").$$render($$result, { version: "0.1", name: "icons_1_up_8" }, {}, {})}</button></div>`;
    }
  })}</button>
  
  <button class="${"fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full border-2 border-primary " + escape("w-16 h-16", true) + " bg-onPrimary flex_row_center duration-800"}"${add_attribute(
    "style",
    "",
    0
  )}><canvas${add_attribute("width", 32, 0)}${add_attribute("height", 32, 0)}${add_attribute("this", menuButtonCanvas, 0)}></canvas></button>
  ${``}
  <div class="${escape("blur-0", true) + " max-h-screen"}" style="${"transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"}">${slots.default ? slots.default({}) : `
      <s1>This page is still under development.</s1>
    `}</div></main>`;
});
export {
  Layout as default
};
