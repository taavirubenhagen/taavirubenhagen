import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { H as H2 } from "../../../../chunks/H2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="w-screen min-h-screen p-8 pt-16">
    ${validate_component(H2, "H2").$$render($$result, {}, {}, {
    default: () => {
      return `Contact`;
    }
  })}<br>
    <br>
    <br>
    Ren\xE9 R\xFCbenhagen<br>
    Kastanienallee 22, 23562 L\xFCbeck<br>
    taavi.ruebenhagen@gmail.com<br></main>`;
});
export {
  Page as default
};
