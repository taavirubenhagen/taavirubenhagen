import { c as create_ssr_component, v as validate_component } from "./index3.js";
/* empty css        */import { S as Section } from "./Section.js";
import "ua-parser-js";
const Section_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { top = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: className + " " + (top ? "pt-16" : "")
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Section_1 as S
};
