import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/index4.js";
import { L as LargeHeading } from "../../../chunks/LargeHeading.js";
import { S as Section } from "../../../chunks/Section.js";
import "ua-parser-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
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
  Page as default
};
