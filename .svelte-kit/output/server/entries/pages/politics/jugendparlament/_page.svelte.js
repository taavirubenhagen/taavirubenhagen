import { c as create_ssr_component, v as validate_component, e as escape, f as each } from "../../../../chunks/index3.js";
/* empty css                         */import { R as RawButton, I as Icon } from "../../../../chunks/RawButton.js";
import { S as Section } from "../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let windowWidth;
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "bg-black font-[Dongle] center_row"
    },
    {},
    {
      default: () => {
        return `<img src="/politics/jugendparlament/wahlplakat_hochformat.png" alt="Jung, dynamisch, zielstrebig. Dein Kandidat f\xFCr das Braunschweiger Jugendparlament." class="max-h-screen">
    <div class="absolute bottom-20 flex justify-between text-5xl" style="${"width: " + escape(
          windowWidth - 64,
          true
        ) + "px;"}">${each(
          [
            ["open-new-window", "https://thezukunft.de/"],
            ["home", "/"],
            ["instagram", "https://www.instagram.com/taavirubenhagen"]
          ],
          (data) => {
            return `${validate_component(RawButton, "RawButton").$$render(
              $$result,
              {
                onClick: () => window.location.href = data[1]
              },
              {},
              {
                default: () => {
                  return `<div class="backdrop-blur-sm rounded-2xl bg-white bg-opacity-25 p-4 pb-0 aspect-square">${validate_component(Icon, "Icon").$$render($$result, { name: data[0] }, {}, {})}</div>
            `;
                }
              }
            )}`;
          }
        )}</div>`;
      }
    }
  )}`;
});
export {
  Page as default
};
