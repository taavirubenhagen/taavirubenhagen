import { c as create_ssr_component, e as escape } from "./index2.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { textClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<i class="${"relative " + escape(textClass, true) + " iconoir-" + escape(name, true)}"></i>`;
});
export {
  Icon as I
};
