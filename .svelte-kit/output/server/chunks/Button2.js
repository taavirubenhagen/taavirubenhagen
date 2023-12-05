import { c as create_ssr_component, v as validate_component } from "./index3.js";
/* empty css        */import { R as RawButton, I as Icon } from "./RawButton.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openInNew = false } = $$props;
  let { onClick } = $$props;
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<t class="underline underline-offset-8">${slots.default ? slots.default({}) : ``}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "open-new-window",
          textClass: "relative top-2"
        },
        {},
        {}
      )}` : ``}</t>`;
    }
  })}`;
});
export {
  Button as B
};
