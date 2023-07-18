import { c as create_ssr_component } from "./index3.js";
/* empty css        */const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-6xl md:text-7xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const P3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="selection:text-outline-on-primary">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  H2 as H,
  P3 as P
};
