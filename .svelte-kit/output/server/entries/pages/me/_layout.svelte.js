import { c as create_ssr_component, h as each, e as escape, v as validate_component, f as add_attribute } from "../../../chunks/index2.js";
import "ua-parser-js";
/* empty css                      */import { I as Icon } from "../../../chunks/icon.js";
const Tertiary_button_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="${"text-lg md:text-lg font-bold"}">${slots.default ? slots.default({}) : ``}</t>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollToTopButtonPositionClass;
  function updateScrollToTopButtonPositionClass(y) {
    const dy = lastScrollY - y;
    lastScrollY = y;
    if (y === 0 || dy <= -8) {
      return "-bottom-10";
    }
    if (Math.abs(dy) <= 16) {
      return scrollToTopButtonPositionClass;
    }
    setTimeout(() => scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY), 8e3);
    return "bottom-8";
  }
  let scrollY = 0;
  let lastScrollY = 0;
  scrollToTopButtonPositionClass = updateScrollToTopButtonPositionClass(scrollY);
  return `




<main class="${"max-w-screen min-h-screen background"}">
    <div class="${"fixed top-0 z-30 pointer-events-none shadow bg-secondary w-screen h-16 md:px-[25%] pt-2 flex justify-around items-center"}">${each(
    [
      ["home", "/me/home"],
      ["chat-bubble-empty", "/contact"],
      ["arrow-separate", "/presenter"],
      ["voice", "/tts"],
      ["color-filter", "/design"],
      ["github", "/me/home"],
      ["instagram", "/me/home"]
    ],
    (e) => {
      return `<a class="${"transition-all duration-200 pointer-events-auto opacity-100 hover:opacity-75"}"${add_attribute("href", e[1], 0)}>${validate_component(Icon, "Icon").$$render($$result, { textClass: "text-2xl", name: e[0] }, {}, {})}
            </a>`;
    }
  )}</div>
    <div class="${"transition-all duration-400 fixed z-40 " + escape(scrollToTopButtonPositionClass, true) + " w-screen flex_row_center"}"><button class="${"transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"}">${validate_component(Tertiary_button_label, "TertiaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `Back to top`;
    }
  })}</button></div>
    ${slots.default ? slots.default({}) : `
        <s1>This page is still under development.</s1>
    `}
  
  
  </main>`;
});
export {
  Layout as default
};
