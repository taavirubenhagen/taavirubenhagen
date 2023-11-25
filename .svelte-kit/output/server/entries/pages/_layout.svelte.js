import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape, f as add_attribute } from "../../chunks/index3.js";
import { D as DeviceDetector } from "../../chunks/DeviceDetector.js";
import { p as page } from "../../chunks/stores.js";
import { c as cursorButtonHover } from "../../chunks/state.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let cursor;
  let localCursorButtonHover;
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  $page.route.id?.includes("home-dev") ? false : true;
  $$unsubscribe_page();
  return `




<main class="relative w-full min-h-full cursor-none bg-background text-onBackground selection:primary font-body">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
