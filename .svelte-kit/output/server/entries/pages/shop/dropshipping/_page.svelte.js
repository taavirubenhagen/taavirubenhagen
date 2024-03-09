import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { S as SmallParagraph } from "../../../../chunks/SmallParagraph.js";
import { B as Button } from "../../../../chunks/Button.js";
import { P as Page } from "../../../../chunks/Page.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Page, "Page").$$render($$result, {}, {}, {
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
  })}`;
});
export {
  Page_1 as default
};