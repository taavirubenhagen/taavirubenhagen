import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/index3.js";
/* empty css                            */import { S as SmallParagraph } from "../../../../../chunks/SmallParagraph.js";
import { R as RawButton, I as Icon } from "../../../../../chunks/RawButton.js";
import { S as Section_1 } from "../../../../../chunks/Section2.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inverted = false } = $$props;
  let { nested = false } = $$props;
  let { emphasized = false } = $$props;
  let { openInNew = false } = $$props;
  let { next = false } = $$props;
  let { download = false } = $$props;
  let { uniformPadding = false } = $$props;
  let { borderClass = "" } = $$props;
  let { onClick } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.nested === void 0 && $$bindings.nested && nested !== void 0)
    $$bindings.nested(nested);
  if ($$props.emphasized === void 0 && $$bindings.emphasized && emphasized !== void 0)
    $$bindings.emphasized(emphasized);
  if ($$props.openInNew === void 0 && $$bindings.openInNew && openInNew !== void 0)
    $$bindings.openInNew(openInNew);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  if ($$props.download === void 0 && $$bindings.download && download !== void 0)
    $$bindings.download(download);
  if ($$props.uniformPadding === void 0 && $$bindings.uniformPadding && uniformPadding !== void 0)
    $$bindings.uniformPadding(uniformPadding);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(RawButton, "RawButton").$$render($$result, { onClick }, {}, {
    default: () => {
      return `<div class="${escape(inverted ? "invert" : "", true) + " border-2 " + escape(borderClass, true) + " border-primary"}">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"transition duration-short ease-in h-12 " + escape(uniformPadding ? "w-12" : "", true) + " " + escape(emphasized ? "[&:not(:hover)]:invert" : "hover:invert", true) + " background px-4 flex " + escape(
            nested || openInNew || next || download ? "justify-between" : "justify-center",
            true
          ) + " items-center gap-2"}">${slots.default ? slots.default({}) : ``}
                ${nested ? `${validate_component(Icon, "Icon").$$render($$result, { name: "plus-circle" }, {}, {})}` : `${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { name: "open-new-window" }, {}, {})}` : `${next ? `${validate_component(Icon, "Icon").$$render($$result, { name: "arrow-right" }, {}, {})}` : `${download ? `${validate_component(Icon, "Icon").$$render($$result, { name: "download" }, {}, {})}` : ``}`}`}`}</div>`;
        }
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section_1, "Section").$$render(
    $$result,
    {
      className: "p-8 flex flex-col justify-center items-stretch gap-4"
    },
    {},
    {
      default: () => {
        return `
    <a href="https://mailto:taavi.ruebenhagen@gmail.com">${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
            }
          },
          {},
          {
            default: () => {
              return `e-mail me
        `;
            }
          }
        )}</a>
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => window.location.href = "https://instagram.com/taavirubenhagen"
          },
          {},
          {
            default: () => {
              return `dm me
    `;
            }
          }
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
