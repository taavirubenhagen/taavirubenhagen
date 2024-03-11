import { c as create_ssr_component, v as validate_component, e as escape } from "./index3.js";
import "./index4.js";
import { S as SmallParagraph } from "./SmallParagraph.js";
import { I as Icon } from "./icon.js";
import { R as RawButton } from "./RawButton.js";
import "ua-parser-js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { secondary = false } = $$props;
  let { openInNew = false } = $$props;
  let { next = false } = $$props;
  let { download = false } = $$props;
  let { onClick } = $$props;
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0)
    $$bindings.download(download);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${"rounded-lg h-12 px-4 " + escape(
        secondary ? "bg-green-300 text-black" : "bg-green-900 text-white",
        true
      ) + " center_row font-body"}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}
            <div class="inline relative top-0.5">${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { name: "open-in-new" }, {}, {})}` : `${next ? `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-forward" }, {}, {})}` : `${download ? `${validate_component(Icon, "Icon").$$render($$result, { name: "download" }, {}, {})}` : ``}`}`}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Button as B
};
