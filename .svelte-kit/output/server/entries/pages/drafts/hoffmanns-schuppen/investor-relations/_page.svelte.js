import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import "../../../../../chunks/index4.js";
import { S as SmallParagraph } from "../../../../../chunks/SmallParagraph.js";
import { M as MediumHeading } from "../../../../../chunks/MediumHeading.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../../../chunks/Button3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="font-family: &quot;Roboto Slab&quot;">${validate_component(Section, "Section").$$render(
    $$result,
    {
      className: "bg-green-100 p-8 flex flex-col justify-between"
    },
    {},
    {
      default: () => {
        return `<div><div style="font-family: &quot;Roboto Serif&quot;">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
          default: () => {
            return `Direkte Beteiligung war noch nie so einfach.
                    <br><br>`;
          }
        })}</div>
            ${validate_component(SmallParagraph, "SmallParagraph").$$render($$result, {}, {}, {
          default: () => {
            return `Unsere Aktien beteiligen dich direkt am Erfolg von Hoffmann&#39;s Schuppen.
                F\xFCr 5\u20AC erh\xE4lst du eine Aktie, die dir Anspruch auf einen Anteil des Firmenkapitals gibt.
                Du kannst deine Aktien jederzeit wieder an uns zur\xFCckgeben
                und bekommst die bis dahin mit deinem Investment erzielten Gewinne ausgezahlt.
                <br><br>
                Die genauen Konditionen, die mit dem Aktienkauf einhergehen, findest du auf deinem Aktiendokument.
                Dieses wird beim Kauf ausgestellt und ist personalisiert, um F\xE4lschungen zu vermeiden;
                du kannst hier aber ein Beispieldokument mit allen wichtigen Informationen herunterladen.
            `;
          }
        })}</div>
        <div class="mb-8 w-full flex flex-col gap-4">
            ${validate_component(Button, "Button").$$render(
          $$result,
          {
            secondary: true,
            download: true,
            onClick: () => window.location.href = "/drafts/hoffmanns-schuppen/Aktie.png"
          },
          {},
          {
            default: () => {
              return `Beispielaktie
            `;
            }
          }
        )}
            ${validate_component(Button, "Button").$$render(
          $$result,
          {
            next: true,
            onClick: () => {
            }
          },
          {},
          {
            default: () => {
              return `Jetzt kaufen
            `;
            }
          }
        )}</div>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
