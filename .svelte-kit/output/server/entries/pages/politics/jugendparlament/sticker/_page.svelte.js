import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/index3.js";
/* empty css                            */import { L as LargeHeading } from "../../../../../chunks/LargeHeading.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { S as Section } from "../../../../../chunks/Section.js";
const LargeParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render($$result, { className: "primary font-[Dongle]" }, {}, {
    default: () => {
      return `<div class="p-8 md:p-16">${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Weil wir Fortschritt brauchen.`;
        }
      })}
        <div class="h-8"></div>
        ${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
        default: () => {
          return `Vom 26.2. - 8.3. ist in Braunschweig Jugendparlamentswahl.
            Eine Stimme f\xFCr mich (Listenplatz 69) ist eine Stimme f\xFCr realen und anhaltenden politischen Einfluss der Braunschweiger Jugend.
        `;
        }
      })}
        <div style="${"height: " + escape(4 + 3 + 3 + 3 + 4, true) + "rem;"}"></div></div>
    <div class="fixed bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent p-8 md:p-16 flex flex-col items-stretch gap-8">${validate_component(Button, "Button").$$render(
        $$result,
        {
          inverted: true,
          openInNew: true,
          onClick: () => window.location.href = "https://dialog.braunschweig.de/qp/l/jupawahl2024"
        },
        {},
        {
          default: () => {
            return `${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
              default: () => {
                return `Jetzt abstimmen
            `;
              }
            })}`;
          }
        }
      )}
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          inverted: true,
          openInNew: true,
          onClick: () => window.location.href = "https://www.instagram.com/taavirubenhagen"
        },
        {},
        {
          default: () => {
            return `${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
              default: () => {
                return `Folge mir
            `;
              }
            })}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
export {
  Page as default
};
