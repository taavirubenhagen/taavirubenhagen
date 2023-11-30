import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
/* empty css        */import { I as Icon } from "./icon.js";
import { R as RawButton } from "./RawButton.js";
const MediumParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { openInNew = false } = $$props;
  let { next = false } = $$props;
  let { uniformPadding = false } = $$props;
  let { borderClass = "" } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.uniformPadding === void 0 && $$bindings.uniformPadding && uniformPadding !== void 0)
    $$bindings.uniformPadding(uniformPadding);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " border-2 " + escape(borderClass, true) + " border-onBackground"}">${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"transition duration-200 ease-in hover:invert bg-background " + escape(uniformPadding ? "px-2" : "px-4", true) + " py-2 flex " + escape(openInNew || next ? "justify-between" : "justify-center", true) + " items-center gap-2"}">${slots.default ? slots.default({}) : ``}
                ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}` : `${next ? `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-right" }, {}, {})}` : ``}`}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Button as B,
  MediumParagraph as M
};
