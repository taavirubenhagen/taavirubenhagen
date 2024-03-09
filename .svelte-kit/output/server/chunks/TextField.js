import { c as create_ssr_component, v as validate_component, e as escape, h as add_attribute } from "./index3.js";
/* empty css        */import { M as MediumParagraph, B as Button } from "./Button.js";
import { I as Icon } from "./RawButton.js";
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { autofocus = false } = $$props;
  let { onSubmit } = $$props;
  let { placeholder = "" } = $$props;
  let input = "";
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex"><div class="${escape(inverted ? "invert" : "", true) + " border-2 border-primary"}">
           
           <input type="text" ${autofocus ? "autofocus" : ""} class="outline-none h-full px-1 text-xl"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", input, 0)}></div>
       ${validate_component(Button, "Button").$$render(
        $$result,
        {
          borderClass: "border-l-0",
          onClick: () => onSubmit(input)
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-right" }, {}, {})}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  TextField as T
};
