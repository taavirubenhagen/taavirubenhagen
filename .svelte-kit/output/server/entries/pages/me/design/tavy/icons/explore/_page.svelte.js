import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../../../chunks/index.js";
/* empty css                                  */import { I as Icon } from "../../../../../../../chunks/icon.js";
import { T as Text_button } from "../../../../../../../chunks/text_button.js";
let areIconsThin = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconData = [[["Hardware"], ["Phone"]], [["Navigation"], ["Down"]]];
  return `
  
<main><section class="${"w-screen p-8 md:p-12 md:pt-16 pb-0 flex flex-col items-start text-center"}"><div class="${"w-full flex justify-between items-end"}"><h3>Tavicons</h3>
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
    <section class="${"p-4 md:p-8 pt-0"}">${each(iconData, (data, i) => {
    return `<h4 class="${"ml-4 mt-8 md:mt-16 mb-4 md:mb-8 w-full text-left"}">${escape(data[0])}</h4>
            <div class="${"w-screen flex flex-wrap items-start text-center"}">${each(data[1], (d, i2) => {
      return `<div class="${"m-4 hover:shadow-xl shadow-neutral-300 border border-primary rounded-2xl w-40 h-40 flex_col_center default_animation_base"}">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          size: 16,
          isThin: areIconsThin,
          name: d.toLowerCase()
        },
        {},
        {}
      )}
                        <div class="${"h-4"}"></div>
                        <h6>${escape(d)}</h6>
                    </div>`;
    })}
            </div>`;
  })}</section>
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
