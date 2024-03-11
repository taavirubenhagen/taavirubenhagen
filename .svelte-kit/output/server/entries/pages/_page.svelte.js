import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
import "../../chunks/index4.js";
import { S as Section } from "../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../chunks/Button.js";
import { B as ButtonSeperator } from "../../chunks/ButtonSeperator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<meta http-equiv="Refresh" content="0; url='/drafts/website">





${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 flex flex-col justify-center items-stretch"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            next: true,
            onClick: () => window.location.href = "/drafts/website"
          },
          {},
          {
            default: () => {
              return `Website (Unfinished)
    `;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            next: true,
            borderClass: "border-t-0",
            onClick: () => window.location.href = "/projects"
          },
          {},
          {
            default: () => {
              return `Projects
    `;
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
    }
  )}`;
});
export {
  Page as default
};
