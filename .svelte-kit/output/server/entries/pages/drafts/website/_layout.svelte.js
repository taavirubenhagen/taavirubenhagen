import { c as create_ssr_component, d as subscribe, e as escape, v as validate_component, h as each } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { g as globalScrollY } from "../../../../chunks/state.js";
import "../../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { S as SmallHeading } from "../../../../chunks/SmallHeading.js";
import { R as RawButton } from "../../../../chunks/RawButton.js";
import { I as InlineButton } from "../../../../chunks/InlineButton.js";
import { B as Button } from "../../../../chunks/Button2.js";
import "ua-parser-js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let scrollDependentClass = "translate-y-0";
  let menuExpanded = false;
  const routes = $page.url.href.split("/").slice(3);
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
        ${validate_component(RawButton, "RawButton").$$render(
    $$result,
    {
      onClick: () => window.location.href = "/drafts/website"
    },
    {},
    {
      default: () => {
        return `<img src="/images/logos/t-r_logo.svg" alt="Logo" class="h-[3.75rem]">`;
      }
    }
  )}
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
      ["shop", "/shop/dropshipping"],
      ["about", "/drafts/website"]
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
  )}</div>
    ${slots.default ? slots.default({}) : ``}
    <footer class="p-16 primary flex flex-col gap-16 normal-case">${validate_component(Button, "Button").$$render(
    $$result,
    {
      inverted: true,
      onClick: () => window.location.href = "https://instagram.com/taavirubenhagen"
    },
    {},
    {
      default: () => {
        return `say hello
        `;
      }
    }
  )}
        ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `Taavi R\xFCbenhagen<br>
            Pothof 9d<br>
            38122 Braunschweig, Germany<br>`;
    }
  })}</footer></main>`;
});
export {
  Layout as default
};
