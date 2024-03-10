import { c as create_ssr_component, v as validate_component, i as is_promise, n as noop, h as each } from "../../../../../../chunks/index3.js";
/* empty css                               */import { M as MediumHeading } from "../../../../../../chunks/MediumHeading.js";
import { I as Icon } from "../../../../../../chunks/icon.js";
import { B as Button } from "../../../../../../chunks/Button3.js";
import { S as Section } from "../../../../../../chunks/Section.js";
import "ua-parser-js";
async function fetchIconNames() {
  const remoteIconFolderURL = "https://api.github.com/repositories/581311131/contents/tavy/main/icons/2024-03";
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Section, "Section").$$render($$result, { className: "p-8 pt-32" }, {}, {
    default: () => {
      return `<div class="flex justify-between items-center">${validate_component(MediumHeading, "MediumHeading").$$render($$result, {}, {}, {
        default: () => {
          return `tavy icons`;
        }
      })}
        <a download href="https://raw.githubusercontent.com/taavirubenhagen/taavirubenhagen/main/src/tavy/icons/2024-03/tavy-icons-2024-03.zip">${validate_component(Button, "Button").$$render(
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
