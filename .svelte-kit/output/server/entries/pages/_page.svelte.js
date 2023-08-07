import { c as create_ssr_component, f as each, e as escape } from "../../chunks/index3.js";
/* empty css                   */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<main class="h-screen p-16 center_col"><div class="md:w-1/2 flex justify-between">${each(["home", "speech", "arrow-separate", "github", "instagram", "chat-bubble-empty"], (e, i) => {
    return `<i class="${"text-2xl md:text-5xl iconoir-" + escape(e, true)}"></i>`;
  })}</div></main>`;
});
export {
  Page as default
};
