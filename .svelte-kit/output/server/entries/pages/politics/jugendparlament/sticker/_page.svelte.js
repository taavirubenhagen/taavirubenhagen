import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
/* empty css                            */import { L as LargeHeading } from "../../../../../chunks/LargeHeading.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { S as Section } from "../../../../../chunks/Section.js";
const Large_paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<t class="text-2xl md:text-2xl">${slots.default ? slots.default({}) : ``}</t>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "p-16 bg-black font-[Dongle] text-white"
    },
    {},
    {
      default: () => {
        return `${validate_component(LargeHeading, "LargeHeading").$$render($$result, {}, {}, {
          default: () => {
            return `Weil wir Fortschritt brauchen.`;
          }
        })}
    <div class="h-8"></div>
    ${validate_component(Large_paragraph, "LargeParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Vom 26.2. - 8.3. ist in Braunschweig Jugendparlamentswahl.
        Eine Stimme f\xFCr mich ist eine Stimme f\xFCr realen und anhaltenden politischen Einfluss der Braunschweiger Jugend.
        \xDCberdies inkludieren die Zielsetzungen meines Wahlprogramms die Konzeption von Legislatur,
        die das Jugendparlament zu einer dauerhaften Senkung
        des durchschnittlichen Preisniveaus f\xFCr D\xF6ner auf einen Wert von 3,50\u20AC (\xB10,50\u20AC, inflationsbereinigt) bef\xE4higt
        und zum fr\xFChestm\xF6glichen Zeitpunkt mit Wirkung f\xFCr alle Braunschweiger Minderj\xE4hrigen zu implementieren ist.
    `;
          }
        })}
    ${validate_component(Button, "Button").$$render(
          $$result,
          {
            onClick: () => {
            }
          },
          {},
          {}
        )}`;
      }
    }
  )}`;
});
export {
  Page as default
};
