import { c as create_ssr_component, h as each, v as validate_component, e as escape } from "../../../../chunks/index3.js";
/* empty css                         */import { B as Button } from "../../../../chunks/Button4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<main class="relative w-full h-screen px-4 py-2 primary selection:background center_col font-mono">${each(["Presentation Master 2", "Personal Website", "FENNI's website"], (title) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        onClick: () => {
        }
      },
      {},
      {
        default: () => {
          return `<h3 class="py-2 font-thin">${escape(title)} &gt;</h3>
        `;
        }
      }
    )}`;
  })}</main>`;
});
export {
  Page as default
};
