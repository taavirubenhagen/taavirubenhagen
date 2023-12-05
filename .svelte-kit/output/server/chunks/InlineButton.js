import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
/* empty css        */import { R as RawButton } from "./RawButton.js";
const SmallParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-md">${slots.default ? slots.default({}) : ``}</t>`;
});
const InlineButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " underline underline-offset-4 capitalize"}">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
export {
  InlineButton as I,
  SmallParagraph as S
};
