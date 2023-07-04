import { c as create_ssr_component } from "./index3.js";
/* empty css        */const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-6xl md:text-7xl font-bold">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  H2 as H
};
