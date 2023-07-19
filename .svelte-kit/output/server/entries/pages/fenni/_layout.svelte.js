import { g as getContext, c as create_ssr_component, e as escape, d as subscribe, v as validate_component, f as add_attribute, h as each } from "../../../chunks/index3.js";
import { D as DeviceDetector } from "../../../chunks/DeviceDetector.js";
/* empty css                      */import { c as cursorButtonHover } from "../../../chunks/state.js";
import { P as P1 } from "../../../chunks/P1.js";
import { B as Button } from "../../../chunks/Button.js";
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
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { textClass = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
    $$bindings.textClass(textClass);
  return `<i class="${"relative top-0.5 " + escape(textClass, true) + " iconoir-" + escape(name, true)}"></i>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollPercentage;
  let pageDependentHeaderClass;
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
  pageDependentHeaderClass = $page.route.id?.includes("/fenni/projects/") ? "absolute text-black" : "fixed text-white";
  $$unsubscribe_page();
  return `


<main class="relative overflow-x-hidden font-sans text-white cursor-none">
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
    <div class="${"transition duration-200 " + escape(pageDependentHeaderClass, true) + " z-30 top-0 pointer-events-none w-full h-screen p-8 md:p-16 flex justify-between items-start font-handwriting"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => {
      }
    },
    {},
    {
      default: () => {
        return `
            <a href="/fenni/home" class="pointer-events-auto mt-1 flex_row_center gap-8 font-logo" style="font-family: 'Yellowtail';"><div class="rounded-full w-8 h-8"><img src="/fenni/images/centered_explosion.png" alt="Portrait von mir" class="object-cover"></div>
                ${validate_component(P1, "P1").$$render($$result, {}, {}, {
          default: () => {
            return `FENNI`;
          }
        })}</a>`;
      }
    }
  )}
        <div class="group pointer-events-auto rounded-full flex justify-end items-start gap-8 md:gap-16">
            ${each(
    [
      ["Home", "home", "/fenni/home"],
      ["Projekte", "director-chair", "/fenni/projects"],
      ["\xDCber mich", "info-empty", "/fenni/about"]
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
            return `<a${add_attribute("href", e[2], 0)} class="transition rounded-full h-10 flex_row_center"${add_attribute(
              "style",
              $page.route.id?.includes(e[2]) ? "filter: drop-shadow(0px 0px 4px rgb(250 204 21));" : "",
              0
            )}>${`${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                name: e[1],
                textClass: "text-xl font-bold"
              },
              {},
              {}
            )}`}</a>
                `;
          }
        }
      )}`;
    }
  )}</div></div>
    ${slots.default ? slots.default({}) : ``}
    
    </main>`;
});
export {
  Layout as default
};
