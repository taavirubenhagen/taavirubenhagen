import { c as create_ssr_component, e as escape, v as validate_component } from "./index2.js";
/* empty css        */const Secondary_button_label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="${"text-xl md:text-xl"}">${slots.default ? slots.default({}) : ``}</t>`;
});
const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonClass = "" } = $$props;
  let { onPrimary = false } = $$props;
  let { primary = false } = $$props;
  let { large = false } = $$props;
  let { onClicked = () => {
  } } = $$props;
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.onClicked === void 0 && $$bindings.onClicked && onClicked !== void 0)
    $$bindings.onClicked(onClicked);
  return `<button class="${escape(buttonClass, true) + " transition-all duration-200 relative hover:scale-[101%] rounded-full " + escape(
    primary ? "" : 'border-2 ${( onPrimary ? "border-onPrimary" : "border-onBackground" )}',
    true
  ) + " " + escape(large ? "h-16" : "h-12", true) + " " + escape(
    primary ? onPrimary ? "bg-onPrimary text-onBackground" : "bg-primary text-onPrimary" : onPrimary ? "text-onPrimary" : "text-onBackground",
    true
  ) + " " + escape(large ? "px-16" : "px-8", true)}">${validate_component(Secondary_button_label, "SecondaryButtonLabel").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</button>`;
});
export {
  Text_button as T
};
