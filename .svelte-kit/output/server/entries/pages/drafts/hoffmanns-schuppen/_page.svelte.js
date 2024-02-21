import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { L as LargeHeading } from "../../../../chunks/LargeHeading.js";
import { S as Section } from "../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { className: "" }, {}, {
    default: () => {
      return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Hoffmann&#39;s Schuppen`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
