import { c as create_ssr_component, v as validate_component, e as escape, d as subscribe, f as each } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
/* empty css                         */import { R as RawButton, I as Icon } from "../../../../chunks/RawButton.js";
import { S as SmallParagraph, a as SmallHeading } from "../../../../chunks/SmallHeading.js";
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
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let scrollDependentClass = "";
  let menuExpanded = false;
  const routes = $page.url.href.split("/").slice(3);
  console.log(routes);
  globalScrollY.subscribe((value) => scrollDependentClass = value === 0 && routes.length === 2 && routes[0] === "drafts" && routes[1] === "website" ? "-translate-y-16" : "translate-y-0");
  $$unsubscribe_page();
  return `




<main class="lowercase"><div class="${"transition duration-medium fixed z-40 " + escape(scrollDependentClass, true) + " bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"}"><div class="w-28">${validate_component(InlineButton, "InlineButton").$$render(
    $$result,
    {
      invisible: true,
      onClick: () => menuExpanded = !menuExpanded
    },
    {},
    {
      default: () => {
        return `${escape(menuExpanded ? "close" : "menu")}`;
      }
    }
  )}</div>
        <img src="/images/logos/t-r_logo.svg" alt="Logo" class="h-[3.75rem]">
        <div class="w-28 flex justify-end">${validate_component(InlineButton, "InlineButton").$$render(
    $$result,
    {
      invisible: true,
      onClick: () => window.location.href = "https://buymeacoffee.com/taavirubenhagen"
    },
    {},
    {
      default: () => {
        return `support me
            `;
      }
    }
  )}</div></div>
    <div class="${"transition duration-long fixed z-30 " + escape(menuExpanded ? "-translate-x-0" : "-translate-x-full", true) + " w-full h-full background p-8 pt-24 flex flex-col items-start gap-1"}">${each(
    [
      ["home", "/drafts/website"],
      ["services", "/drafts/website"],
      ["shop", "/drafts/website"],
      ["presenter", "/drafts/website"],
      ["design", "/drafts/website"],
      ["about", "/drafts/website"],
      ["contact", "/drafts/website/contact"]
    ],
    (e) => {
      return `${validate_component(RawButton, "RawButton").$$render(
        $$result,
        {
          onClick: () => window.location.href = e[1]
        },
        {},
        {
          default: () => {
            return `${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(e[0])}`;
              }
            })}
            `;
          }
        }
      )}`;
    }
  )}
        </div>
    ${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
