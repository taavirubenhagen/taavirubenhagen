import { c as create_ssr_component, e as escape } from "./index.js";
/* empty css        */const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<button class="${escape(buttonClass, true) + " transition-all relative m-0 hover:m-0 rounded-full border-2 hover:border-2 " + escape(onPrimary ? "border-onPrimary" : "border-onBackground", true) + " h-14 " + escape(
    primary ? onPrimary ? "bg-onPrimary hover:bg-transparent text-onBackground hover:text-onPrimary" : "bg-primary hover:bg-transparent text-onPrimary hover:text-onBackground" : onPrimary ? "bg-transparent hover:bg-onPrimary text-onPrimary hover:text-onBackground" : "bg-transparent hover:bg-primary text-onBackground hover:text-onPrimary",
    true
  ) + " px-5 " + escape(
    onPrimary ? "text-onPrimary hover:text-onBackground" : "text-onBackground hover:text-onPrimary",
    true
  )}"><b2>${slots.default ? slots.default({}) : ``}</b2></button>`;
});
export {
  Text_button as T
};
