import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
/* empty css                   */import { B as Button } from "../../chunks/Button.js";
import { B as ButtonSeperator } from "../../chunks/ButtonSeperator.js";
import { P as Page } from "../../chunks/Page.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          onClick: () => window.location.href = "/projects"
        },
        {},
        {
          default: () => {
            return `Projects`;
          }
        }
      )}
    ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/politics/jugendparlament"
        },
        {},
        {
          default: () => {
            return `Vote for me`;
          }
        }
      )}
    ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "https://www.instagram.com/taavirubenhagen"
        },
        {},
        {
          default: () => {
            return `@taavirubenhagen
    `;
          }
        }
      )}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          borderClass: "border-t-0",
          onClick: () => window.location.href = "https://www.buymeacoffee.com/taavirubenhagen"
        },
        {},
        {
          default: () => {
            return `Buy Me a Coffee
    `;
          }
        }
      )}
    ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          onClick: () => window.location.href = "/admin"
        },
        {},
        {
          default: () => {
            return `Admin`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page_1 as default
};
