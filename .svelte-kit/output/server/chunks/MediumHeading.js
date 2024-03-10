import { c as create_ssr_component } from "./index3.js";
import "./index4.js";
const MediumHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-4xl md:text-5xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  MediumHeading as M
};
