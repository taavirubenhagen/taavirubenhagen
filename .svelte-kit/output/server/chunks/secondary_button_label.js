import { c as create_ssr_component } from "./index2.js";
/* empty css        */const Secondary_button_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"paragraph text-xl md:text-xl"}">${slots.default ? slots.default({}) : ``}</p>`;
});
export {
  Secondary_button_label as S
};
