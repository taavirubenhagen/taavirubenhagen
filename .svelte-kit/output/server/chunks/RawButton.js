import { c as create_ssr_component, e as escape } from "./index3.js";
/* empty css        */const MediumParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl md:text-xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { textClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<i class="${"relative " + escape(textClass, true) + " iconoir-" + escape(name, true)}"></i>`;
});
const RawButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="relative z-20">${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Icon as I,
  MediumParagraph as M,
  RawButton as R
};
