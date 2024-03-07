import { c as create_ssr_component, v as validate_component, f as each, e as escape } from "../../../../../chunks/index3.js";
/* empty css                            */import { M as MediumHeading } from "../../../../../chunks/MediumHeading.js";
import { S as Section } from "../../../../../chunks/Section.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div style="font-family: &quot;Roboto Serif&quot;">${validate_component(Section, "Section").$$render($$result, { className: "bg-green-950 text-white" }, {}, {
    default: () => {
      return `<div class="p-16 pb-12 text-center">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Unser faires Produktsortiment
            `;
        }
      })}</div>
        <div class="flex flex-col gap-8">${each(["g-s-dunkel_ls", "g-s-dunkel_ls", "g-s-dunkel_ls", "g-s-dunkel_ls"], (title) => {
        return `<img src="${"/drafts/hoffmanns-schuppen/ads/" + escape(title, true) + ".png"}" alt="Die Gute Schokolade (Zartbitter)" class="w-full">`;
      })}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
