import { w as writable } from "./index2.js";
import { c as create_ssr_component } from "./index3.js";
/* empty css        */const globalScrollY = writable(0);
const cursorButtonHover = writable(false);
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Button as B,
  cursorButtonHover as c,
  globalScrollY as g
};
