import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
import "ua-parser-js";
/* empty css                         */const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-8xl md:text-9xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  globalScrollY.subscribe((value) => {
  });
  return `


<main><div class="w-full min-h-screen sm:p-16 flex_col_center"><div class="flex flex-col items-start">${validate_component(H1, "H1").$$render($$result, {}, {}, {
    default: () => {
      return `Remember that your life is art.`;
    }
  })}</div></div></main>`;
});
export {
  Page as default
};
