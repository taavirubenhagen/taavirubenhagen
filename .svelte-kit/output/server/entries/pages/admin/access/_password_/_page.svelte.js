import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
/* empty css                            */import { S as Section } from "../../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { className: "p-8 center_col" }, {}, {
    default: () => {
      return `<div class="flex flex-col justify-center items-stretch">Login Successful
    </div>`;
    }
  })}`;
});
export {
  Page as default
};
