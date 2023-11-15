import { c as create_ssr_component } from "../../chunks/index3.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="relative w-full min-h-screen bg-background text-onBackground selection:primary font-body">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
