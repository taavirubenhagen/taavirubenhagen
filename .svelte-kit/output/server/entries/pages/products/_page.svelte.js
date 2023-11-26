import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index3.js";
/* empty css                      */import { S as SmallParagraph } from "../../../chunks/SmallParagraph.js";
import { M as MediumParagraph, B as Button } from "../../../chunks/Button.js";
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
        <div class="absolute bottom-8 px-8 text-center">${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {})}</div></main>`;
    }
  })}`;
});
export {
  Page as default
};
