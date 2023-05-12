import { c as create_ssr_component, e as escape, v as validate_component, f as each, d as add_attribute } from "../../../chunks/index.js";
import "ua-parser-js";
/* empty css                      */import { S as Secondary_button_label, T as Text_button } from "../../../chunks/text_button.js";
const Tertiary_button_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"text-lg md:text-lg font-bold"}">${slots.default ? slots.default({}) : ``}</p>`;
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




<main class="${"max-w-screen min-h-screen background"}"><button class="${"transition-all duration-400 fixed z-50 w-screen " + escape("h-8", true) + " primary flex_row_center"}"><div class="${"w-screen h-8 flex_row_center"}">${validate_component(Secondary_button_label, "SecondaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"transition-all duration-400 " + escape("text-xl", true) + " font-display"}">Still under development
                </div>`;
    }
  })}</div>
        <div class="${"transition-all duration-400 absolute bottom-16 w-screen " + escape(
    "opacity-0",
    true
  ) + " flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true, onPrimary: true }, {}, {
    default: () => {
      return `Visit anyway`;
    }
  })}</div></button>
    <div class="${"fixed top-16 z-30 pointer-events-none w-screen px-8 flex justify-between md:justify-center"}">${each(
    [
      ["home", "/me/home"],
      ["chat-bubble-empty", "/contact"],
      ["arrow-separate text-blue-700", "/presenter"],
      ["voice text-blue-700", "/tts"],
      ["color-filter text-blue-700", "/design"],
      ["github text-orange-700", "/me/home"],
      ["instagram text-orange-700", "/me/home"]
    ],
    (e) => {
      return `<a class="${"pointer-events-auto"}"${add_attribute("href", e[1], 0)}><i class="${"transition-all duration-200 md:mx-4 backdrop-blur-sm shadow hover:scale-100 rounded hover:rounded-xl w-12 h-12 bg-background bg-opacity-50 flex_row_center text-2xl iconoir-" + escape(e[0], true)}"></i>
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
