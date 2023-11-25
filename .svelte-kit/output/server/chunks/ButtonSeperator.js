import { c as create_ssr_component, v as validate_component } from "./index3.js";
/* empty css        */import { B as Button } from "./Button4.js";
const ButtonSeperator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="opacity-0 pointer-events-none">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `_`;
      }
    }
  )}</div>`;
});
export {
  ButtonSeperator as B
};
