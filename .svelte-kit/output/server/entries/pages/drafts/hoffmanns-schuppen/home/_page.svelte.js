import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import "../../../../../chunks/index4.js";
import { M as MediumHeading } from "../../../../../chunks/MediumHeading.js";
import { S as Section } from "../../../../../chunks/Section.js";
import "ua-parser-js";
import { B as Button } from "../../../../../chunks/Button3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="font-family: &quot;Roboto Serif&quot;">${validate_component(Section, "Section").$$render($$result, { className: "bg-green-900 text-white" }, {}, {
    default: () => {
      return `<div class="relative"><img src="/drafts/hoffmanns-schuppen/local_business.jpg" alt="" class="w-full h-screen object-cover brightness-75">
            <div class="absolute left-8 bottom-16 md:bottom-0 md:h-full flex flex-col justify-center gap-8">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Nachhaltig, n\xFCtzlich, nahbar.<br>
                    Willkommen bei Hoffmann&#39;s Schuppen.
                `;
        }
      })}
                <div class="flex gap-4">${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => window.location.href = "/drafts/hoffmanns-schuppen/produkte"
        },
        {},
        {
          default: () => {
            return `Produkte entdecken
                    `;
          }
        }
      )}
                    ${validate_component(Button, "Button").$$render(
        $$result,
        {
          secondary: true,
          onClick: () => window.location.href = "/drafts/hoffmanns-schuppen/mach-mit"
        },
        {},
        {
          default: () => {
            return `Mach mit
                    `;
          }
        }
      )}</div></div></div>
        ${``}`;
    }
  })}</div>`;
});
export {
  Page as default
};
