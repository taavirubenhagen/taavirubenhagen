import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import "ua-parser-js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
import { B as Button, P as P3 } from "../../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let windowHeight;
  let scrollY;
  setInterval(
    () => {
    },
    500
  );
  return `


<main><section class="relative h-screen"><div class="fixed brightness-75 contrast-200 w-full h-screen flex_col_center md:justify-start"><img alt="" src="/centered_explosion.png" class="opacity-75 w-full min-w-screen" style="${"transform: scale(" + escape(
    (() => {
      let x = scrollY / windowHeight / 2;
      let limit = 1.25;
      return x > limit ? limit : x;
    })(),
    true
  ) + ");"}"></div>
        <div class="${"fixed brightness-75 w-full h-screen " + escape("px-8", true) + " flex_col_center"}" style="${"opacity: " + escape(1 - 0 * (scrollY / windowHeight), true) + ";"}"><img alt="Portrait von mir" src="/colorful_woman.png"${add_attribute("class", "w-full", 0)}></div>
        <div class="absolute z-15 w-full h-screen p-16 flex_col_center"><div class="mt-4 mb-4 invert text-center font-logo">${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Hi, ich bin FENNI.`;
    }
  })}</div>
            ${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `<a href="/fenni/projects" class="relative z-20 my-8 rounded-full bg-opacity-100 bg-yellow-600 h-12 px-4 flex_row_center">${validate_component(P3, "P3").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="text-white">Sag Hallo</div>`;
          }
        })}</a>`;
      }
    }
  )}</div></section>
    <section class="h-screen"></section>
    <section class="h-screen"></section>
    <section class="h-screen"></section></main>


`;
});
export {
  Page as default
};
