import { c as create_ssr_component, d as subscribe, v as validate_component, e as escape } from "../../chunks/index3.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import { b as buttonHover, c as cursorPosition } from "../../chunks/state.js";
/* empty css                   */import { L as LargeHeading } from "../../chunks/LargeHeading.js";
import { P as Page } from "../../chunks/Page.js";
import { D as DeviceDetector } from "../../chunks/DeviceDetector.js";
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $buttonHover, $$unsubscribe_buttonHover;
  let $cursorPosition, $$unsubscribe_cursorPosition;
  $$unsubscribe_buttonHover = subscribe(buttonHover, (value) => $buttonHover = value);
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => $cursorPosition = value);
  $$unsubscribe_buttonHover();
  $$unsubscribe_cursorPosition();
  return `${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        $buttonHover ? "w-8 h-8 opacity-25" : "w-4 h-4 opacity-100",
        true
      ) + " duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"}" style="${"left: " + escape($cursorPosition[0], true) + "px; top: " + escape($cursorPosition[1], true) + "px; transition-property: transform, opacity, width, height; " + escape(
        $buttonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"></div>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_cursorPosition;
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_cursorPosition = subscribe(cursorPosition, (value) => value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $page.url.href.split("/").slice(3);
  $$unsubscribe_page();
  $$unsubscribe_cursorPosition();
  $$unsubscribe_navigating();
  return `




<main class="relative h-screen overflow-x-hidden cursor-none">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}
    ${$navigating ? `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Loading \u21BA
            `;
        }
      })}`;
    }
  })}` : `
        ${slots.default ? slots.default({}) : ``}`}
    ${``}</main>`;
});
export {
  Layout as default
};
