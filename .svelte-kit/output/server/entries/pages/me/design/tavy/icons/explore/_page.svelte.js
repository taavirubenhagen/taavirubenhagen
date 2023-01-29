import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../../../chunks/index.js";
/* empty css                                  */import { T as Text_button } from "../../../../../../../chunks/text_button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
  
<main><section class="${"w-screen p-8 md:p-16 flex flex-col items-start text-center"}"><div class="${"w-full flex justify-between items-end"}"><h3>Tavicons</h3>
        <div class="${"flex"}"><a href="${"mailto:taavi.ruebenhagen@gmail.com"}" class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Normal stroke`;
    }
  })}</a>
          <div class="${"w-4"}"></div>
          <a href="${"mailto:taavi.ruebenhagen@gmail.com"}" class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Choose color`;
    }
  })}</a>
          <div class="${"w-4"}"></div>
          <a href="${"mailto:taavi.ruebenhagen@gmail.com"}" class="${"flex_row_center"}">${validate_component(Text_button, "TextButton").$$render($$result, {}, {}, {
    default: () => {
      return `Choose category`;
    }
  })}</a></div></div></section>
    <section class="${"w-screen h-screen p-8 md:p-16 flex text-center"}">${each(
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    (data, i) => {
      return `<div class="${"m-1 w-32 h-8 bg-red-600"}">${escape(i)}</div>`;
    }
  )}</section>
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
