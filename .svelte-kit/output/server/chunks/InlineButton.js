import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
import "./index4.js";
import { S as SmallParagraph } from "./SmallParagraph.js";
import { I as Icon } from "./icon.js";
import { R as RawButton } from "./RawButton.js";
import "ua-parser-js";
const InlineButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { invisible = false } = $$props;
  let { inverted = false } = $$props;
  let { openInNew = false } = $$props;
  let { onClick } = $$props;
  if ($$props.invisible === void 0 && $$bindings.invisible && invisible !== void 0)
    $$bindings.invisible(invisible);
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${"inline gap-2 " + escape(invisible ? "" : "underline underline-offset-4", true)}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { inverted, name: "open-in-new" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
export {
  InlineButton as I
};
