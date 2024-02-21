import { c as create_ssr_component, v as validate_component, f as each } from "../../../../../chunks/index3.js";
/* empty css                            */import { L as LargeHeading } from "../../../../../chunks/LargeHeading.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { S as Section } from "../../../../../chunks/Section.js";
const LargeParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-3xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "bg-black font-[Dongle] text-white"
    },
    {},
    {
      default: () => {
        return `<div class="p-16">${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
          default: () => {
            return `Weil wir Fortschritt brauchen.`;
          }
        })}
        <div class="h-8"></div>
        ${each([0, 0, 0, 0, 0, 0, 0, 0], (_) => {
          return `${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
            default: () => {
              return `Vom 26.2. - 8.3. ist in Braunschweig Jugendparlamentswahl.
                Eine Stimme f\xFCr mich ist eine Stimme f\xFCr realen und anhaltenden politischen Einfluss der Braunschweiger Jugend.
                \xDCberdies inkludieren die Zielsetzungen meines Wahlprogramms die Konzeption von Legislatur,
                die das Jugendparlament zu einer dauerhaften Senkung
                des durchschnittlichen Preisniveaus f\xFCr D\xF6ner auf einen Wert von 3,50\u20AC (\xB10,50\u20AC, inflationsbereinigt) bef\xE4higt
                und zum fr\xFChestm\xF6glichen Zeitpunkt mit Wirkung f\xFCr alle Braunschweiger Minderj\xE4hrigen zu implementieren ist.
            `;
            }
          })}`;
        })}</div>
    <div class="fixed bottom-0 w-full bg-gradient-to-t from-black via-black to-transparent p-16 flex flex-col items-stretch gap-8">${validate_component(Button, "Button").$$render(
          $$result,
          {
            inverted: true,
            openInNew: true,
            onClick: () => window.location.href = "https://thezukunft.de/jugendparlament"
          },
          {},
          {
            default: () => {
              return `${validate_component(LargeParagraph, "LargeParagraph").$$render($$result, {}, {}, {
                default: () => {
                  return `Mehr Infos
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
    }
  )}`;
});
export {
  Page as default
};
