import { c as create_ssr_component, e as escape } from "./index.js";
/* empty css        */const Text_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonClass = "" } = $$props;
  let { onPrimary = false } = $$props;
  let { primary = false } = $$props;
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  return `<div class="${escape(buttonClass, true) + " transition-all m-0 hover:m-0 rounded-full border-2 hover:border-2 " + escape(onPrimary ? "border-onPrimary" : "border-onBackground", true) + " " + escape(
    primary ? onPrimary ? "bg-onPrimary hover:bg-transparent text-onBackground hover:text-onPrimary" : "bg-primary hover:bg-transparent text-onPrimary hover:text-onBackground" : onPrimary ? "bg-transparent hover:bg-onPrimary text-onPrimary hover:text-onBackground" : "bg-transparent hover:bg-primary text-onBackground hover:text-onPrimary",
    true
  ) + " px-5 py-3 " + escape(
    onPrimary ? "text-onPrimary hover:text-onBackground" : "text-onBackground hover:text-onPrimary",
    true
  )}" style="${"transition-duration: 100ms; transition-timing-function: cubic-bezier(.2, 0, .4, 1)"}"><b2>${slots.default ? slots.default({}) : ``}</b2></div>`;
});
export {
  Text_button as T
};
