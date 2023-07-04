import { c as create_ssr_component, e as escape } from "./index3.js";
/* empty css        */const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPrimary = false } = $$props;
  let { simple = false } = $$props;
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  return `<t class="${"transition duration-400 " + escape(simple ? "" : "underline underline-offset-8", true) + " " + escape(
    onPrimary ? "text-onPrimary hover:text-neutral-400" : "text-onBackground hover:text-neutral-600",
    true
  )}">${slots.default ? slots.default({}) : ``}</t>`;
});
export {
  B
};
