import { g as getContext, c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../../chunks/index.js";
import "ua-parser-js";
/* empty css                      */const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let menuButtonCanvas;
  $$unsubscribe_page();
  return `<main class="${"relative w-screen min-h-screen background"}"><header class="${"absolute z-10 w-screen h-32 bg-primary"}"></header>
    <header class="${"w-screen h-32 bg-primary"}"></header>
    <button class="${"fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full " + escape("w-16 h-16", true) + " bg-onPrimary flex_row_center duration-800"}"${add_attribute(
    "style",
    "",
    0
  )}><canvas${add_attribute("width", 32, 0)}${add_attribute("height", 32, 0)}${add_attribute("this", menuButtonCanvas, 0)}></canvas></button>
    ${``}
    <div class="${escape("blur-0", true) + " max-h-screen"}" style="${"transition: all 400ms cubic-bezier(0, 0, 1, 1); max-height: 100vh;"}">${slots.default ? slots.default({}) : `
            <s1>This page is still under development.</s1>
        `}</div>
    </main>`;
});
export {
  Layout as default
};
