import { c as create_ssr_component } from "./index3.js";
import "./index4.js";
const LargeHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-5xl md:text-6xl font-bold tracking-wider">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  LargeHeading as L
};
