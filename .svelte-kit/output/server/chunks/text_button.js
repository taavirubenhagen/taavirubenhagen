import { c as create_ssr_component, e as escape, v as validate_component } from "./index2.js";
/* empty css        */import { S as Secondary_button_label } from "./secondary_button_label.js";
const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonClass = "" } = $$props;
  let { onPrimary = false } = $$props;
  let { primary = false } = $$props;
  let { onClicked = () => {
  } } = $$props;
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.onClicked === void 0 && $$bindings.onClicked && onClicked !== void 0)
    $$bindings.onClicked(onClicked);
  return `<button class="${escape(buttonClass, true) + " transition-all duration-400 relative opacity-100 hover:opacity-75 rounded-lg border-2 " + escape(onPrimary ? "border-onPrimary" : "border-onBackground", true) + " h-12 " + escape(
    primary ? onPrimary ? "bg-onPrimary text-onBackground" : "bg-primary text-onPrimary" : onPrimary ? "text-onPrimary" : "text-onBackground",
    true
  ) + " px-4"}">${validate_component(Secondary_button_label, "SecondaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</button>`;
});
export {
  Text_button as T
};
