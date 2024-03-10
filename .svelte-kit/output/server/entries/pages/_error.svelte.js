import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
/* empty css                   */import { L as LargeHeading } from "../../chunks/LargeHeading.js";
import { S as Section } from "../../chunks/Section.js";
import "ua-parser-js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Sorry, page not found \u{1F61E}`;
        }
      })}`;
    }
  })}`;
});
export {
  Error as default
};
