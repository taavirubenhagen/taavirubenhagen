import { c as create_ssr_component } from "./index3.js";
/* empty css        */const P1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-3xl selection:text-outline-on-primary font-light">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  P1 as P
};
