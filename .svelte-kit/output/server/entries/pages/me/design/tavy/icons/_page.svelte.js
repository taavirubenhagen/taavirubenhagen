import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index.js";
/* empty css                               */import { T as Text_button } from "../../../../../../chunks/text_button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
  
<main><section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><h2>Tavy Icons</h2>
        <div class="${"h-8"}"></div>
        <h4 class="${"text-neutral-500"}">An ultra minimalist UI icon set.</h4>
        <div class="${"h-16"}"></div>
        <div class="${"flex_row_center"}"><a href="${"/me/design/tavy/icons/explore"}">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true }, {}, {
    default: () => {
      return `Explore icons`;
    }
  })}</a>
          <div class="${"w-8"}"></div>
          ${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Download set`;
    }
  })}</div></section>
    <section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><h3>Tell which icons you miss in the set.</h3>
      <div class="${"h-16"}"></div>
      <a href="${"mailto:taavi.ruebenhagen@gmail.com"}" class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, { primary: true }, {}, {
    default: () => {
      return `E-Mail me`;
    }
  })}</a></section></main>`;
});
export {
  Page as default
};
