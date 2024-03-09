import { c as create_ssr_component, v as validate_component } from "./index3.js";
/* empty css        */import { R as RawButton, I as Icon } from "./RawButton.js";
const InlineButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openInNew = false } = $$props;
  let { inverted = false } = $$props;
  let { onClick } = $$props;
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="inline gap-2 underline underline-offset-4">${slots.default ? slots.default({}) : ``}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { inverted, name: "open-new-window" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
export {
  InlineButton as I
};
