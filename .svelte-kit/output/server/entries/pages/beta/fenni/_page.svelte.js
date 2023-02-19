import { c as create_ssr_component, f as each, v as validate_component, e as escape } from "../../../../chunks/index.js";
/* empty css                        */import { I as Icon } from "../../../../chunks/icon.js";
import { T as Text_button } from "../../../../chunks/text_button.js";
/* empty css                                                       *//* empty css                         */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main><section class="${"w-screen h-screen"}"><img src="${"https://www.1517.org/hubfs/two%20natures%20of%20Christ.jpeg"}" alt="${""}" class="${"absolute z-5"}">
        <div class="${"absolute w-screen h-screen bg-black bg-opacity-25 p-8 md:p-16 flex_col_center text-center"}"><h4 class="${"relative z-10 text-white italic"}">Je kleiner die Dinge,<br><br>
                in denen ich Schönheit entdecke,<br><br>
                desto größer das Lächeln,<br><br>
                dass sie in mein Gesicht zaubern.
            </h4></div></section>
  <section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><h3>Every aspect of any app on any platform.</h3>
    <div class="${"h-16"}"></div>
    <div class="${"flex_row_center"}">${each(["Mobile", "Web", "Server", "Graphics", "Deploy", "Market"], (data) => {
    return `<a href="${"/me/design/tavy/icons"}"><div class="${"m-6 mb-12 shadow-xl rounded-2xl shadow-neutral-300 w-24 h-24 flex_row_center"}">
            ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        isThin: true,
        name: "phone",
        iconClass: "w-12 h-12 opacity-100"
      },
      {},
      {}
    )}</div>
          <h6>${escape(data)}</h6>
        </a>`;
  })}</div></section>
  <section class="${"w-screen h-screen background p-8 md:p-16 flex_col_center relative text-center"}"><h3>Contact me for any collaboration.</h3>
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
