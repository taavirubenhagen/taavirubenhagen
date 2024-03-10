import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
/* empty css                      */import { L as LargeHeading } from "../../../chunks/LargeHeading.js";
import { P as Page } from "../../../chunks/Page.js";
import "ua-parser-js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Coming soon, stay tuned \u{1F440}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page_1 as default
};
