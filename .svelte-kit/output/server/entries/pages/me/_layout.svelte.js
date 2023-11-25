import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index3.js";
/* empty css                      */import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
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




<main class="max-w-screen min-h-screen background"><div class="${"transition-all duration-400 fixed z-40 " + escape(scrollToTopButtonPositionClass, true) + " w-screen center_row"}"><button class="transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `Back to top`;
    }
  })}</button></div>
    ${slots.default ? slots.default({}) : `
        <s1>This page is still under development.</s1>
    `}</main>`;
});
export {
  Layout as default
};
