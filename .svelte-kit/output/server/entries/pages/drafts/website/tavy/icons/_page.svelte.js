import { c as create_ssr_component, v as validate_component, e as escape, i as is_promise, n as noop, h as each } from "../../../../../../chunks/index3.js";
import { t as tavyVersion } from "../../../../../../chunks/index4.js";
import { M as MediumHeading } from "../../../../../../chunks/MediumHeading.js";
import { I as Icon } from "../../../../../../chunks/icon.js";
import { B as Button } from "../../../../../../chunks/Button2.js";
import { S as Section } from "../../../../../../chunks/Section.js";
import "ua-parser-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function fetchIconNames() {
    const remoteIconFolderURL = `https://api.github.com/repositories/581311131/contents/src/tavy/main/icons/${tavyVersion}`;
    const json = await (await fetch(remoteIconFolderURL)).json();
    let names = [];
    console.log(json[0].name);
    for (let i = 0; i < json.length; i++) {
      const parts = json[i].name.split(".");
      if (parts[1] === "svg") {
        names.push(parts[0]);
      }
    }
    return names;
  }
  return `${validate_component(Section, "Section").$$render($$result, { className: "p-8 pt-32" }, {}, {
    default: () => {
      return `<div class="flex justify-between items-center">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
        default: () => {
          return `tavy icons`;
        }
      })}
        <a download href="${"/tavy/icons/" + escape(tavyVersion, true) + "/tavy-icons-" + escape(tavyVersion, true) + ".zip"}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => {
          }
        },
        {},
        {
          default: () => {
            return `download
            `;
          }
        }
      )}</a></div>
    <div class="h-16"></div>
    ${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
        <div>loading tavy icons...</div>
    `;
        }
        return function(names) {
          return `
        <div class="-mr-4 flex flex-wrap gap-4">${each(names, (name) => {
            return `<div class="rounded-lg shadow min-w-[4rem] aspect-square center_col">${validate_component(Icon, "Icon").$$render($$result, { name, size: 24 }, {}, {})}
                </div>`;
          })}</div>
    `;
        }(__value);
      }(fetchIconNames())}`;
    }
  })}`;
});
export {
  Page as default
};
