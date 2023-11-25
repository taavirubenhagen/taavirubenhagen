import { c as create_ssr_component } from "./index3.js";
/* empty css        */const SmallParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-lg md:text-lg">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  SmallParagraph as S
};
