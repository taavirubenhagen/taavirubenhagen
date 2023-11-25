import { c as create_ssr_component } from "./index3.js";
/* empty css        */const LargeHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-6xl md:text-7xl font-bold tracking-wider">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  LargeHeading as L
};
