import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import "../../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { S as Section } from "../../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


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
            openInNew: true,
            onClick: () => window.location.href = "https://amzn.eu/d/gZVxnZl"
          },
          {},
          {
            default: () => {
              return `Stone Key Hider
    `;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            openInNew: true,
            onClick: () => window.location.href = "/shop/dropshipping/coming-soon",
            borderClass: "border-t-0"
          },
          {},
          {
            default: () => {
              return `...
    `;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            openInNew: true,
            onClick: () => window.location.href = "/shop/dropshipping/coming-soon",
            borderClass: "border-t-0"
          },
          {},
          {
            default: () => {
              return `...
    `;
            }
          }
        )}
    <div class="absolute bottom-8 px-8 text-center">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {})}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
