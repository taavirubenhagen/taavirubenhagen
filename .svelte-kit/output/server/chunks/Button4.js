import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
/* empty css        */import { M as MediumParagraph } from "./MediumParagraph.js";
import { R as RawButton, I as Icon } from "./RawButton.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { borderClass = "" } = $$props;
  let { openInNew = false } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " border-2 " + escape(borderClass, true) + " border-onBackground"}">${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"transition duration-200 hover:invert bg-background px-4 py-2 flex " + escape(openInNew ? "justify-between" : "justify-center", true) + " items-center gap-2"}">${slots.default ? slots.default({}) : ``}
                ${openInNew ? `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              name: "open-new-window",
              textClass: "relative"
            },
            {},
            {}
          )}` : ``}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Button as B
};
