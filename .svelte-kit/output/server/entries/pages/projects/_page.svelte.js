import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
/* empty css                      */import { B as Button } from "../../../chunks/Button.js";
import { B as ButtonSeperator } from "../../../chunks/ButtonSeperator.js";
import { P as Page } from "../../../chunks/TertiaryButton.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          onClick: () => window.location.href = "https://fenni.me"
        },
        {},
        {
          default: () => {
            return `FENNIs Website`;
          }
        }
      )}
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          next: true,
          borderClass: "border-t-0",
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
    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          openInNew: true,
          borderClass: "border-t-0",
          onClick: () => window.location.href = "https://www.hvf-bs.net/faecher/mint/projekte?tx_hvfprofiles_hvfprojects%5Baction%5D=show&tx_hvfprofiles_hvfprojects%5Bcontroller%5D=Project&tx_hvfprofiles_hvfprojects%5Bproject%5D=159&cHash=88f6c8e382a4a210695c814ebf51cb2d"
        },
        {},
        {
          default: () => {
            return `Presenter - Info
    `;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page_1 as default
};
