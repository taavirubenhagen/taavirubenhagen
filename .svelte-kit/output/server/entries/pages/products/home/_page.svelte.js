import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                         */import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { R as RawButton, I as Icon, M as MediumParagraph } from "../../../../chunks/RawButton.js";
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
      return `<div class="${escape(inverted ? "invert" : "", true) + " border-2 " + escape(borderClass, true) + " border-onBackground"}"><div class="${"transition duration-200 hover:invert bg-background px-4 py-2 flex " + escape(openInNew ? "justify-between" : "justify-center", true) + " items-center gap-2"}">${slots.default ? slots.default({}) : ``}
            ${openInNew ? `${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          name: "open-new-window",
          textClass: "relative"
        },
        {},
        {}
      )}` : ``}</div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="relative center_col"><div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home"
        },
        {},
        {
          default: () => {
            return `Stone Key Holder
            `;
          }
        }
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home",
          borderClass: "border-t-0"
        },
        {},
        {
          default: () => {
            return `Inkless Printer
            `;
          }
        }
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home",
          borderClass: "border-t-0"
        },
        {},
        {
          default: () => {
            return `Bottle Holder
            `;
          }
        }
      )}
            ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home",
          borderClass: "border-t-0"
        },
        {},
        {
          default: () => {
            return `Humping Dog Charger
            `;
          }
        }
      )}</div>
        <div class="absolute bottom-8">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `As an Amazon Associate I earn from qualifying purchases.
            `;
        }
      })}</div></main>`;
    }
  })}`;
});
export {
  Page as default
};
