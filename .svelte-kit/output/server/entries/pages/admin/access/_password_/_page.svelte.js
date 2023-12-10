import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
/* empty css                            */import { S as SmallHeading } from "../../../../../chunks/SmallHeading.js";
import { P as Page } from "../../../../../chunks/InlineButton.js";
const Page_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center items-stretch">${validate_component(SmallHeading, "SmallHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Login Successful`;
        }
      })}</div>`;
    }
  })}`;
});
export {
  Page_1 as default
};
