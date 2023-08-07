import { c as create_ssr_component } from "./index3.js";
/* empty css        */const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B
};
