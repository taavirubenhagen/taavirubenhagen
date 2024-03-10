import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
/* empty css                            */import { B as Button } from "../../../../../chunks/Button3.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-8 flex flex-col justify-center items-stretch gap-4"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
            }
          },
          {},
          {
            default: () => {
              return `<a href="mailto:taavi.ruebenhagen@gmail.com" class="w-full">e-mail me
        </a>`;
            }
          }
        )}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => window.location.href = "https://instagram.com/taavirubenhagen"
          },
          {},
          {
            default: () => {
              return `dm me
    `;
            }
          }
        )}
    
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => window.location.href = "/drafts/website/legal/imprint"
          },
          {},
          {
            default: () => {
              return `imprint
    `;
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
