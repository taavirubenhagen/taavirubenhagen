import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                      */import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { M as MediumParagraph } from "../../../chunks/MediumParagraph.js";
import { B as Button } from "../../../chunks/Button4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let windowHeight;
  return `


${validate_component(MediumParagraph, "MediumParagraph").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="relative center_col" style="${"height: " + escape(windowHeight, true) + "px;"}"><div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "/products/home"
        },
        {},
        {
          default: () => {
            return `Here Will The
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
            return `Amazon Affiliate
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
            return `Links Be
            `;
          }
        }
      )}</div>
        <div class="absolute bottom-8 px-8 text-center">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `As an Amazon Associate I [will] earn from qualifying purchases.
            `;
        }
      })}</div></main>`;
    }
  })}`;
});
export {
  Page as default
};