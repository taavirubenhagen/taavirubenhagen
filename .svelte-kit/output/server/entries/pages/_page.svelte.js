import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
/* empty css                   */import { S as Section } from "../../chunks/Section.js";
import { B as Button } from "../../chunks/Button.js";
import { B as ButtonSeperator } from "../../chunks/ButtonSeperator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render($$result, { className: "p-8 center_col" }, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center items-stretch">${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          onClick: () => window.location.href = "/"
        },
        {},
        {
          default: () => {
            return `Personal Website`;
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
            return `Projects`;
          }
        }
      )}
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          borderClass: "border-t-0",
          onClick: () => window.location.href = "/products"
        },
        {},
        {
          default: () => {
            return `Product Shop`;
          }
        }
      )}
        ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"
        },
        {},
        {
          default: () => {
            return `Presenter (Android)
        `;
          }
        }
      )}
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          borderClass: "border-t-0",
          onClick: () => alert("Coming soon!")
        },
        {},
        {
          default: () => {
            return `Presenter (iOS)`;
          }
        }
      )}
        ${validate_component(ButtonSeperator, "ButtonSeperator").$$render($$result, {}, {}, {})}
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "https://www.instagram.com/taavirubenhagen/"
        },
        {},
        {
          default: () => {
            return `@taavirubenhagen
        `;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
