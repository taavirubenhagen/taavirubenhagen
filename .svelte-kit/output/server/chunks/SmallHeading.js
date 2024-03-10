import { c as create_ssr_component } from "./index3.js";
import "./index4.js";
const SmallHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  SmallHeading as S
};
