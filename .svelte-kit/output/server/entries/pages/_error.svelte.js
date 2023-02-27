import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
/* empty css                   */import { T as Title_section } from "../../chunks/title_section.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Title_section, "Frame").$$render($$result, { index: 0 }, {}, {
    default: () => {
      return `<h3>Sorry, we can&#39;t find the page you are looking for.</h3>
    <div class="${"h-8"}"></div>
    <s1>This site is constantly under development and the project is in its early planning stage. The content you want might be moved.</s1>`;
    }
  })}</main>`;
});
export {
  Error as default
};
