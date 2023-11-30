import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
/* empty css                      */import { P as Page, S as SmallParagraph } from "../../../chunks/TertiaryButton.js";
import { B as Button } from "../../../chunks/Button.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Page, "Page").$$render($$result, { withoutRouteIndicator: true }, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home"
        },
        {},
        {
          default: () => {
            return `The Affiliate
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
            return `Links Will
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
            return `Be Put Here
        `;
          }
        }
      )}</div>
    <div class="absolute bottom-8 px-8 text-center">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Page_1 as default
};
