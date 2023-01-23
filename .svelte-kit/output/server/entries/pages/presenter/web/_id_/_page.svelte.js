import { g as getContext, c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from "../../../../../chunks/index.js";
import "ua-parser-js";
import { C as Content_section } from "../../../../../chunks/content_section.js";
const getStores = () => {
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(Content_section, "ContentSection").$$render($$result, { title: "Post a post." }, {}, {
    default: () => {
      return `<button type="${"button"}" class="${"z-20 rounded-full px-4 py-2 bg-neutral-600 text-white focus:bg-black"}">Upload, ${escape($page.params["id"])}</button>`;
    }
  })}`;
});
export {
  Page as default
};
