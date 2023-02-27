import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index.js";
import { C as Content_section } from "../../../../../../chunks/content_section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Content_section, "ContentSection").$$render($$result, { title: "Post a post." }, {}, {
    default: () => {
      return `<button type="${"button"}" class="${"z-20 rounded-full px-4 py-2 bg-neutral-600 text-white focus:bg-black"}">Upload
    </button>`;
    }
  })}`;
});
export {
  Page as default
};
