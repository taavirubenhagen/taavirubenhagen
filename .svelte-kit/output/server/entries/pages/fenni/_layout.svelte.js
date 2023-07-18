import { g as getContext, c as create_ssr_component, e as escape, d as subscribe, v as validate_component, f as add_attribute, h as each } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { c as cursorButtonHover } from "../../../chunks/state.js";
import { P as P1 } from "../../../chunks/P1.js";
import { B as Button, P as P3 } from "../../../chunks/Button.js";
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
const B = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onPrimary = false } = $$props;
  let { simple = false } = $$props;
  if ($$props.onPrimary === void 0 && $$bindings.onPrimary && onPrimary !== void 0)
    $$bindings.onPrimary(onPrimary);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  return `<t class="${"transition duration-400 " + escape(simple ? "" : "underline underline-offset-8", true) + " " + escape(onPrimary ? "text-onPrimary" : "text-onBackground", true)}">${slots.default ? slots.default({}) : ``}</t>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let windowHeight;
  let scrollY;
  let cursor;
  let localCursorButtonHover;
  cursorButtonHover.subscribe((value) => {
    localCursorButtonHover = value;
  });
  scrollPercentage = scrollY / windowHeight * 100;
  $$unsubscribe_page();
  return `


<main class="relative overflow-x-hidden bg-gradient-to-br from-yellow-50 via-yellow-700 to-yellow-900 font-sans text-white cursor-none">
    ${validate_component(DeviceDetector, "DeviceDetector").$$render($$result, { showInDevice: "desktop" }, {}, {
    default: () => {
      return `<div class="${escape(
        localCursorButtonHover ? "w-8 h-8 opacity-50 invert bg-yellow-600" : "w-4 h-4 invert bg-yellow-600",
        true
      ) + " duration-300 fixed z-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"}" style="${"transition-property: transform, opacity, width, height; " + escape(
        localCursorButtonHover ? "transition-timing-function: cubic-bezier(.2, 0, .1, .9);" : "transition-timing-function: cubic-bezier(.5, 0, .5, 1);",
        true
      )}"${add_attribute("this", cursor, 0)}></div>`;
    }
  })}
    <div class="group z-45 fixed w-full h-8"><div class="transition duration-200 h-0.5 group-hover:h-4 group-focus:h-4 primary" style="${"width: " + escape(scrollPercentage, true) + "%; transition-property: height;"}"></div></div>
    <div class="transition duration-200 fixed z-30 top-0 pointer-events-none w-full h-screen p-16 flex justify-between items-start font-handwriting">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `
            <a href="/fenni/home" class="pointer-events-auto mt-1 flex_row_center gap-8 font-logo" style="font-family: 'Yellowtail';"><div class="rounded-full w-8 h-8 bg-yellow-600"></div>
                ${validate_component(P1, "P1").$$render($$result, {}, {}, {
          default: () => {
            return `FENNI`;
          }
        })}</a>`;
      }
    }
  )}
        <div class="group pointer-events-auto rounded-full flex justify-end items-start gap-8">
            ${each(
    [
      ["Home", "/fenni/home"],
      ["Projekte", "/fenni/projects"],
      ["\xDCber mich", "/fenni/about"]
    ],
    (e) => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          onClick: () => {
          }
        },
        {},
        {
          default: () => {
            return `<a${add_attribute("href", e[1], 0)} class="transition rounded-full h-10 px-6 flex_row_center"${add_attribute(
              "style",
              $page.route.id == e[1] ? "filter: drop-shadow(0px 0px 4px rgb(250 204 21));" : "",
              0
            )}>${validate_component(P3, "P3").$$render($$result, {}, {}, {
              default: () => {
                return `${escape(e[0])}`;
              }
            })}</a>
                `;
          }
        }
      )}`;
    }
  )}</div></div>
    ${slots.default ? slots.default({}) : ``}
    
    <section class="relative z-20 w-full h-screen p-16 lg:p-32 lg:pb-16">
        <div class="w-full h-screen pt-16 flex_col_center text-center text-5xl">
            Website designed von
            <div class="h-6"></div>
            <a href="/" class="font-bold">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(B, "B").$$render($$result, {}, {}, {
          default: () => {
            return `Taavi R\xFCbenhagen`;
          }
        })}`;
      }
    }
  )}</a></div></section>
</main>`;
});
export {
  Layout as default
};
