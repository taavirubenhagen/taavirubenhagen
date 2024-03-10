import { c as create_ssr_component } from "./index3.js";
import "./index4.js";
const MediumParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  MediumParagraph as M
};
