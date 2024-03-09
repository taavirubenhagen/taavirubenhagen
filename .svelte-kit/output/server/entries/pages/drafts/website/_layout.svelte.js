import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
/* empty css                         */import { R as RawButton, I as Icon } from "../../../../chunks/RawButton.js";
import { S as SmallParagraph } from "../../../../chunks/SmallParagraph2.js";
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
        ${openInNew ? `${validate_component(Icon, "Icon").$$render($$result, { inverted, name: "open-new-window" }, {}, {})}` : ``}</div>`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollDependentClass = "";
  globalScrollY.subscribe((value) => {
    console.log(value);
    scrollDependentClass = value === 0 ? "-translate-y-16" : "translate-y-0";
  });
  return `




<main class="lowercase"><div class="${"transition duration-medium fixed z-40 top-0 " + escape(scrollDependentClass, true) + " bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"}"><div class="w-16">${validate_component(InlineButton, "InlineButton").$$render(
    $$result,
    {
      invisible: true,
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `menu
            `;
      }
    }
  )}</div>
        <img src="/images/logos/t-r_logo.svg" alt="Logo" class="h-[3.75rem]">
        <div class="w-16 flex justify-end">${validate_component(InlineButton, "InlineButton").$$render(
    $$result,
    {
      invisible: true,
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `search
            `;
      }
    }
  )}</div></div>
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
