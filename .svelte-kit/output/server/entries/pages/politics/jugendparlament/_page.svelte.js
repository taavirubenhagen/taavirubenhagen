import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                         */import { S as Section } from "../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "bg-black font-[Dongle] center_row"
    },
    {},
    {
      default: () => {
        return `<img src="/politics/jugendparlament/wahlplakat_hochformat.png" alt="Jung, dynamisch, zielstrebig. Dein Kandidat f\xFCr das Braunschweiger Jugendparlament." class="max-h-screen">`;
      }
    }
  )}`;
});
export {
  Page as default
};
